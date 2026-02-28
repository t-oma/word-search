import { insertLine } from "~/shared/utils";
import type { Direction, Position } from "~/shared/types";

type TryPlaceWordProps = {
  letters: string[][];
  word: string;
  size: number;
  pos: Position;
  dir: Direction;
};

type TryPlaceWordReturn = {
  succeeded: boolean;
  result: string[][];
  positions: Position[];
};

/**
 * Tries to place a word at a given position and direction.
 *
 * @param {TryPlaceWordProps} options already placed letters.
 * @param {TryPlaceWordProps['letters']} options.letters already placed letters.
 * @param {TryPlaceWordProps['word']} options.word word to place.
 * @param {TryPlaceWordProps['size']} options.size size of the grid
 * @param {TryPlaceWordProps['pos']} options.pos position to place the word at
 * @param {TryPlaceWordProps['dir']} options.dir direction to place the word
 *
 * @returns {TryPlaceWordReturn} result of the placement attempt.
 */
function tryPlaceWord({
  letters,
  word,
  size,
  pos,
  dir,
}: TryPlaceWordProps): TryPlaceWordReturn {
  const wordLetters = word.toUpperCase().split("");
  const takenPositions: Position[] = [];

  const logging = false;

  if (
    pos.row + dir.dr * word.length > size ||
    pos.col + dir.dc * word.length > size ||
    pos.row + dir.dr * word.length < 0 ||
    pos.col + dir.dc * word.length < 0
  ) {
    if (logging) {
      console.error(
        `FAILED: word ${word} at ${pos.row}, ${pos.col} exceeds bounds`
      );
    }
    return {
      succeeded: false,
      result: letters,
      positions: takenPositions,
    };
  }

  // Check for letter conflicts
  let { row, col } = pos;
  for (let k = 0; k < wordLetters.length; k++) {
    if (
      letters[row] &&
      letters[row][col] &&
      letters[row][col] !== wordLetters[k]
    ) {
      if (logging) {
        console.error(
          `FAILED: letter conflict at ${row}, ${col}: existing '${letters[row][col]}' vs '${wordLetters[k]}'`
        );
      }
      return {
        succeeded: false,
        result: letters,
        positions: takenPositions,
      };
    }
    row += dir.dr;
    col += dir.dc;
  }

  const { matrix: newLetters, positions } = insertLine(letters, {
    items: wordLetters,
    startPos: { row: pos.row, col: pos.col },
    dir,
  });
  takenPositions.push(...positions);

  return {
    succeeded: true,
    result: newLetters,
    positions: takenPositions,
  };
}

export { tryPlaceWord };
export type { TryPlaceWordProps, TryPlaceWordReturn };
