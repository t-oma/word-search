# tryPlaceWord()

Attempts to place a single word at a given position and direction.

## Parameters:

```typescript
type TryPlaceWordProps = {
  letters: string[][];
  word: string;
  size: number;
  pos: Position;
  dir: Direction;
};
```

See [Direction](../../../shared/types#direction) and [Position](../../../shared/types#position) for more details.

## Return:

```typescript
type TryPlaceWordReturn = {
  succeeded: boolean;
  result: string[][];
  positions: Position[];
};
```

See [Position](../../../shared/types#position) for more details.

## Usage:

```typescript
import { tryPlaceWord } from "~/features/grid-generator";

const result = tryPlaceWord({
  letters: [
    [empty, empty, "F"],
    ["A", empty, empty],
    [empty, empty, "K"],
  ],
  word: "CAT",
  size: 3,
  pos: { row: 0, col: 0 },
  dir: { dr: 1, dc: 0 }, // vertical
});
```

## Result:

```typescript
{
  succeeded: true,
  result: [
    ["C", empty, "F"],
    ["A", empty, empty],
    ["T", empty, "K"]
  ],
  positions: [{row: 0, col: 0}, {row: 1, col: 0}, {row: 2, col: 0}]
}
```

## Placement Rules

1. **Bounds Check** - Word must fit within grid boundaries
2. **Letter Conflicts** - Can place if:
   - Cell is empty, OR
   - Cell contains the same letter (allows word intersections)

```
Valid Placement (intersection):
  Existing:  C A T
  New:       | A |
  Result:    C A T

Invalid Placement (conflict):
  Existing:   C A T
  New:        | | R
  Result:     FAILS (T ≠ R)
```
