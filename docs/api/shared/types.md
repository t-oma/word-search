# Types

TypeScript type definitions for the application.

## Position

Represents a position in the game grid.

```typescript
import type { Position } from "~/shared/types";

interface Position {
  row: number;
  col: number;
}

// Usage
const pos: Position = { row: 5, col: 3 };
```

## Direction

Represents a direction in the grid using delta values.

```typescript
import type { Direction } from "~/shared/types";

// Horizontal (left to right)
const horizontal: Direction = { dr: 0, dc: 1 };

// Vertical (top to bottom)
const vertical: Direction = { dr: 1, dc: 0 };

// Diagonal (top-left to bottom-right)
const diagonal: Direction = { dr: 1, dc: 1 };

// Diagonal (top-right to bottom-left)
const diagonalReverse: Direction = { dr: 1, dc: -1 };
```

## Difficulty

Game difficulty levels.

```typescript
import type { Difficulty } from "~/shared/types";

type Difficulty = "easy" | "medium" | "hard";
```

## WordsCategory

Categories of words available in the game.

```typescript
import type { WordsCategory } from "~/shared/types";

type WordsCategory = "animals" | "weather" | "color" | "fruits";
```
