# Utilities

Utility functions for the application.

## cn

A utility for merging Tailwind CSS classes with `clsx` and `tailwind-merge`.

```typescript
import { cn } from "~/shared/utils/cn";
```

### Features

- Merges Tailwind CSS classes
- Handles conflicting classes (later classes win)
- Supports conditional classes

### Usage

```typescript
// Basic usage
cn("px-4 py-2", "bg-blue-500");

// With conditional classes
cn("px-4 py-2", isActive && "bg-blue-500", !isDisabled && "hover:bg-blue-600");

// With cx/tailwind-merge behavior
cn("px-4 py-2 bg-red-500", "bg-blue-500");
// Result: "px-4 py-2 bg-blue-500" (bg-red-500 is overwritten)
```

## Matrix Utilities

Functions for working with 2D grids/matrices.

```typescript
import {
  insertLine,
  itemsAtDirection,
  itemsAtPositions,
  mapDirection,
  previewVector,
} from "~/shared/utils/matrix";
```

### mapDirection

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
    console.log(pos, matrix[pos.row][pos.col]);
  },
});
```

### insertLine

Insert a line of items into a matrix at a position and direction.

```typescript
const result = insertLine(matrix, {
  items: ["H", "E", "L", "L", "O"],
  startPos: { row: 0, col: 0 },
  dir: { dr: 0, dc: 1 }, // horizontal
});

// Result:
// {
//   matrix: [["H", "E", "L", "L", "O", ...], ...],
//   positions: [{row: 0, col: 0}, {row: 0, col: 1}, ...]
// }
```

### previewVector

Preview positions that would be occupied by a line.

```typescript
const positions = previewVector(
  { row: 0, col: 0 },
  { dr: 0, dc: 1 }, // horizontal
  5
);

// Result: [{row: 0, col: 0}, {row: 0, col: 1}, {row: 0, col: 2}, {row: 0, col: 3}, {row: 0, col: 4}]
```

### itemsAtPositions

Extract items from specific positions in a matrix.

```typescript
const items = itemsAtPositions(matrix, [
  { row: 0, col: 0 },
  { row: 0, col: 1 },
  { row: 0, col: 2 },
]);
```

## General Utilities

### isBrowser

A boolean value indicating whether the code is running in a browser environment.

```typescript
import { isBrowser } from "~/shared/utils/utils";

if (isBrowser) {
  console.log("Running in a browser environment");
}
```

### getRandomLetter

Returns a random letter from the alphabet.

```typescript
import { getRandomLetter } from "~/shared/utils/utils";

console.log(getRandomLetter()); // "A"
```

### gridLetters

Generates 2-dimensional array of letters.

```typescript
import { gridLetters } from "~/shared/utils/utils";

const letters = gridLetters(3);

console.log(letters); // [["A", "B", "C"], ["D", "E", "F"], ["G", "H", "I"]]
```

### clamp

Clamps a value between a minimum and maximum.

```typescript
import { clamp } from "~/shared/utils/utils";

console.log(clamp(5, 0, 10)); // 5
console.log(clamp(-5, 0, 10)); // 0
console.log(clamp(15, 0, 10)); // 10
```

### shuffle

Shuffles an array.

```typescript
import { shuffle } from "~/shared/utils/utils";

const array = [1, 2, 3, 4, 5];
const shuffled = shuffle(array);

console.log(shuffled); // [2, 1, 4, 3, 5]
```

### capitalize

Capitalizes the first letter of a string.

```typescript
import { capitalize } from "~/shared/utils/utils";

console.log(capitalize("hello")); // "Hello"
```

### parseIntSafe

Safely parses an integer from a string.

```typescript
import { parseIntSafe } from "~/shared/utils/utils";

console.log(parseIntSafe("5")); // 5
console.log(parseIntSafe("5.5")); // null
console.log(parseIntSafe("abc")); // null
```
