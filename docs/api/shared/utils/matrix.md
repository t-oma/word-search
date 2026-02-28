# Matrix Utilities

Functions for working with 2D grids/matrices.

```typescript
import {
  insertLine,
  itemsAtDirection,
  itemsAtPositions,
  mapDirection,
  previewVector,
} from "~/shared/utils";
```

## mapDirection

Iterate over a direction in a matrix.

```typescript
const matrix = [
  ["A", "B", "C"],
  ["D", "E", "F"],
  ["G", "H", "I"],
];

mapDirection(matrix, {
  length: 3,
  startPos: { row: 0, col: 0 },
  dir: { dr: 1, dc: 1 }, // diagonal
  callback: (matrix, pos, index) => {
    console.log(matrix[pos.row][pos.col]);
  },
});
```

Result:

```typescript
A E I
```

## insertLine

Insert a line of items into a matrix at a position and direction.

```typescript
const result = insertLine(matrix, {
  items: ["H", "E", "L", "L", "O"],
  startPos: { row: 0, col: 0 },
  dir: { dr: 0, dc: 1 }, // horizontal
});
```

Result:

```typescript
{
  matrix: [["H", "E", "L", "L", "O", ...], ...],
  positions: [{row: 0, col: 0}, {row: 0, col: 1}, ...]
}
```

## previewVector

Preview positions that would be occupied by a line.

```typescript
const positions = previewVector(
  { row: 0, col: 0 },
  { dr: 0, dc: 1 }, // horizontal
  4
);
```

Result:

```typescript
[
  { row: 0, col: 0 },
  { row: 0, col: 1 },
  { row: 0, col: 2 },
  { row: 0, col: 3 },
];
```

## itemsAtPositions

Extract items from specific positions in a matrix.

```typescript
const matrix = [
  ["A", "B", "C"],
  ["D", "E", "F"],
  ["G", "H", "I"],
];
const items = itemsAtPositions(matrix, [
  { row: 0, col: 0 },
  { row: 1, col: 1 },
  { row: 2, col: 2 },
]);
```

Result:

```typescript
[
  ["A", empty, empty],
  [empty, "E", empty],
  [empty, empty, "I"],
];
```
