import type { Position } from "~/shared/types";

/**
 * Calculates positions for a straight line selection (horizontal, vertical, or diagonal)
 */
function calculateLineSelection(
  startPos: Position,
  endPos: Position
): Position[] {
  const positions: Position[] = [];
  const rowDiff = Math.abs(endPos.row - startPos.row);
  const colDiff = Math.abs(endPos.col - startPos.col);

  // Check if it's a valid straight line
  if (rowDiff === colDiff || rowDiff === 0 || colDiff === 0) {
    const rowStep =
      endPos.row > startPos.row ? 1 : endPos.row < startPos.row ? -1 : 0;
    const colStep =
      endPos.col > startPos.col ? 1 : endPos.col < startPos.col ? -1 : 0;

    const steps = Math.max(rowDiff, colDiff);
    for (let i = 0; i <= steps; i++) {
      positions.push({
        row: startPos.row + rowStep * i,
        col: startPos.col + colStep * i,
      });
    }
  } else {
    // Not a straight line - just select end position
    positions.push(endPos);
  }

  return positions;
}

export { calculateLineSelection };
