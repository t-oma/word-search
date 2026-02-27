import { useEffect, useState } from "react";

import { generateGridLetters, generateWords } from "./generator";
import type { Difficulty, WordsCategory } from "~/shared/types";

const WORD_COUNT_RANGES = {
  easy: { min: 3, max: 4 },
  medium: { min: 5, max: 6 },
  hard: { min: 6, max: 7 },
} as const;
const WORD_LENGTH_RANGES = {
  easy: { min: 3, max: 5 },
  medium: { min: 4, max: 7 },
  hard: { min: 5, max: 9 },
} as const;

type UseGeneratorProps = {
  size: number;
  difficulty: Difficulty;
  category?: WordsCategory;
};

type UseGeneratorReturn = {
  words: string[];
  letters: string[][];
};

/**
 * Generate array filled with words generated from words library. Words are placed at random positions. Remaining positions are filled with random letters.
 * Words can intersect.
 *
 * Uses {@link generateWords} to generate words.
 *
 * @param {UseGeneratorProps} options options.
 * @param {UseGeneratorProps['size']} options.size size of the grid.
 * @param {UseGeneratorProps['difficulty']} options.difficulty difficulty of the puzzle.
 * @param {UseGeneratorProps['category']} options.category category of the words.
 *
 * @returns {UseGeneratorReturn} generated grid letters.
 */
function useGenerator({
  size,
  difficulty,
  category,
}: Readonly<UseGeneratorProps>): UseGeneratorReturn {
  const [words, setWords] = useState<string[]>([]);
  const [letters, setLetters] = useState<string[][]>([]);
  const [placedWords, setPlacedWords] = useState<string[]>([]);

  useEffect(() => {
    // eslint-disable-next-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
    setWords(
      generateWords({
        difficulty,
        category,
        ranges: {
          count: WORD_COUNT_RANGES[difficulty],
          length: WORD_LENGTH_RANGES[difficulty],
        },
      })
    );
  }, [size, difficulty, category]);

  useEffect(() => {
    const { letters, placedWords } = generateGridLetters({ words, size });
    setLetters(letters); // eslint-disable-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
    setPlacedWords(Array.from(placedWords)); // eslint-disable-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
  }, [words, size]);

  return { words: placedWords, letters };
}

export { useGenerator };
export type { UseGeneratorProps, UseGeneratorReturn };
