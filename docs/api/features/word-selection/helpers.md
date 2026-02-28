# Helpers

## calculateLineSelection()

Calculates positions for a straight line selection (horizontal, vertical, or diagonal).

## Parameters:

```typescript
startPos: Position;
endPos: Position;
```

See [Position](../../shared/types#position) for more details.

## Return:

```typescript
Position[]
```

See [Position](../../shared/types#position) for more details.

## Usage:

```typescript
import { calculateLineSelection } from "~/features/word-selection";

const positions = calculateLineSelection(
  { row: 0, col: 0 },
  { row: 2, col: 2 }
); // diagonal to the bottom-right
```

## Result:

```typescript
[
  { row: 0, col: 0 },
  { row: 1, col: 1 },
  { row: 2, col: 2 },
];
```
