# Helpers

## getRandomDirection()

Returns a purely random direction.

```typescript
import { getRandomDirection } from "~/features/grid-generator";

const dir = getRandomDirection();
```

### Possible results

```typescript
{ dr: 0, dc: 1 }  - horizontal right
{ dr: 1, dc: 0 }  - vertical down
{ dr: 1, dc: 1 }  - diagonal down-right
```

## getWeightedDirection()

Returns a direction with weighted randomness to ensure variety.

```typescript
import { getWeightedDirection } from "~/features/grid-generator";

const directionCounts = {
  horizontal: 5,
  vertical: 2,
  diagonal: 1,
};

const dir = getWeightedDirection(directionCounts);
// Higher chance for vertical or diagonal (less used)
```

## fillRandomLetters()

Fills empty cells in the grid with random letters.

```typescript
import { fillRandomLetters } from "~/features/grid-generator";

const letters = [
  ["C", "A", "T"],
  ["D", "", "G"],
  ["", "", ""],
];

fillRandomLetters(letters, 3);
```

### Example Result

```typescript
[
  ["C", "A", "T"],
  ["D", "X", "G"],
  ["R", "Y", "Z"],
];
```
