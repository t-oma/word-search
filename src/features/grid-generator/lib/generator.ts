import { wordsLibrary } from "~/shared/data/words";
import { clamp, shuffle } from "~/shared/utils";
import { fillRandomLetters, getWeightedDirection } from "./helpers";
import { tryPlaceWord } from "./placement";
import type { Difficulty, WordsCategory } from "~/shared/types";
import type { DirectionCounts } from "../model/types";

type GenerateGridLettersProps = {
  size: number;
  words: string[];
};

type GenerateGridLettersReturn = {
  letters: string[][];
  placedWords: Set<string>;
};

/**
 * Generates array with each word from words array placed at random position. (words can intersect)
 * Remaining positions are filled with random letters.
 *
 * @param {GenerateGridLettersProps} options options.
 * @param {GenerateGridLettersProps['size']} options.size size of the grid.
 * @param {GenerateGridLettersProps['words']} options.words words to place.
 *
 * @example
 * ```ts
 * const words = ["cat", "rat"];
 * const size = 3;
 * const { letters, placedWords } = generateGridLetters({ words, size });
 *
 *  letters:
 *  Array [
 *    ["f", "d", "r"],
 *    ["m", "k", "a"],
 *    ["c", "a", "t"]
 *  ]
 *  placedWords:
 *  Set {
 *    "cat",
 *    "dog"
 *  }
 * ```
 *
 * @returns {GenerateGridLettersReturn} generated grid letters.
 */
function generateGridLetters({
  size,
  words,
}: Readonly<GenerateGridLettersProps>): GenerateGridLettersReturn {
  let letters: string[][] = [];
  const placedWords = new Set<string>();

  const logging = false;

  if (logging) {
    console.log(`WORDS TO PLACE: ${words.flat()}`);
  }

  const directionCounts: DirectionCounts = {
    horizontal: 0,
    vertical: 0,
    diagonal: 0,
  };

  let i = 0;
  while (i < words.length) {
    const word = words[i];
    let placed = false;
    let attempts = 0;
    const maxAttempts = 100; // attempts per word

    while (!placed && attempts < maxAttempts) {
      const dir = getWeightedDirection(directionCounts);

      const minRow = 0;
      const maxRow = size - (dir.dr === 0 ? 1 : word.length);
      const minCol = 0;
      const maxCol = size - (dir.dc === 0 ? 1 : word.length);

      const row = clamp(Math.floor(Math.random() * size), minRow, maxRow);
      const col = clamp(Math.floor(Math.random() * size), minCol, maxCol);

      const { succeeded, result } = tryPlaceWord({
        letters,
        word,
        size,
        pos: { row, col },
        dir,
      });
      if (succeeded) {
        if (logging) {
          console.log(
            `PLACED ${word} AT ${row}, ${col} WITH DIRECTION {${dir.dr},${dir.dc}}`
          );
        }
        letters = result;
        // Update direction count
        if (dir.dr === 0 && dir.dc === 1) directionCounts.horizontal++;
        else if (dir.dr === 1 && dir.dc === 0) directionCounts.vertical++;
        else if (dir.dr === 1 && dir.dc === 1) directionCounts.diagonal++;
        placed = true;
        placedWords.add(word);
      }
      attempts++;
    }

    if (!placed && logging) {
      console.log(`FAILED TO PLACE ${word} after ${maxAttempts} attempts`);
    }
    i++;
  }

  fillRandomLetters(letters, size);

  return {
    letters,
    placedWords,
  };
}

type WordCountRange = {
  min: number;
  max: number;
};

type WordLengthRange = {
  min: number;
  max: number;
};

type GenerateWordsProps = {
  difficulty: Difficulty;
  category?: WordsCategory;
  ranges: {
    count: WordCountRange;
    length: WordLengthRange;
  };
};

/**
 * Generates array with words of given difficulty and size.
 * Words taken from words library.
 *
 * @param {GenerateWordsProps} options options.
 * @param {GenerateWordsProps['difficulty']} options.difficulty difficulty of the puzzle.
 * @param {GenerateWordsProps['category']} options.category category of the words.
 * @param {GenerateWordsProps['ranges']} options.ranges ranges for word count and length.
 *
 * @example
 * ```ts
 * const words = generateWords({
 *   difficulty: "easy",
 *   category: "animals",
 *   ranges: {
 *     count: { min: 3, max: 4 },
 *     length: { min: 3, max: 4 },
 *   },
 * });
 *
 *  words:
 *  [
 *    "cat",
 *    "dog",
 *    "bird"
 *  ]
 * ```
 *
 * @returns {string[]} generated words.
 */
function generateWords({
  difficulty,
  category,
  ranges,
}: GenerateWordsProps): string[] {
  const categories = Object.keys(wordsLibrary) as WordsCategory[];
  const selectedCategory =
    category || categories[Math.floor(Math.random() * categories.length)];

  const categoryWords = wordsLibrary[selectedCategory];
  const difficultyWords = categoryWords[difficulty];

  if (!difficultyWords) {
    throw new Error(
      `No words found for category ${selectedCategory} and difficulty ${difficulty}`
    );
  }

  // Filter words by length suitable for grid size
  const suitableWords = Array.from(difficultyWords).filter(
    (word: string) =>
      word.length >= ranges.length.min && word.length <= ranges.length.max
  );

  if (suitableWords.length === 0) {
    throw new Error(
      `No suitable words found for size ${ranges.length.max} and difficulty ${difficulty}`
    );
  }

  const { min: minWords, max: maxWords } = ranges.count;
  const wordCount = Math.min(
    Math.floor(Math.random() * (maxWords - minWords + 1)) + minWords,
    suitableWords.length
  );

  const shuffled = shuffle(suitableWords);

  return shuffled.slice(0, wordCount);
}

export { generateGridLetters, generateWords };
export type { GenerateGridLettersProps, GenerateGridLettersReturn };
