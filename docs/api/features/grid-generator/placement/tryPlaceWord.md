# tryPlaceWord()

Attempts to place a single word at a given position and direction.

## Parameters

```typescript
type TryPlaceWordProps = {
  letters: string[][];
  word: string;
  size: number;
  pos: Position;
  dir: Direction;
};
```

<table>
  <thead>
    <tr>
      <th>Prop</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>letters</code></td>
      <td><code>string[][]</code></td>
      <td>Grid of letters</td>
    </tr>
    <tr>
      <td><code>word</code></td>
      <td><code>string</code></td>
      <td>Word to place</td>
    </tr>
    <tr>
      <td><code>size</code></td>
      <td><code>number</code></td>
      <td>Grid size</td>
    </tr>
    <tr>
      <td><code>pos</code></td>
      <td><code>Position</code></td>
      <td>Position to place the word at</td>
    </tr>
    <tr>
      <td><code>dir</code></td>
      <td><code>Direction</code></td>
      <td>Direction to place the word</td>
    </tr>
  </tbody>
</table>

See [Direction](../../../shared/types#direction) and [Position](../../../shared/types#position) for more details.

## Return

```typescript
type TryPlaceWordReturn = {
  succeeded: boolean;
  result: string[][];
  positions: Position[];
};
```

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>succeeded</code></td>
      <td><code>boolean</code></td>
      <td>Whether the placement was successful</td>
    </tr>
    <tr>
      <td><code>result</code></td>
      <td><code>string[][]</code></td>
      <td>Grid with the placed word</td>
    </tr>
    <tr>
      <td><code>positions</code></td>
      <td><code>Position[]</code></td>
      <td>Positions of the placed word</td>
    </tr>
  </tbody>
</table>

See [Position](../../../shared/types#position) for more details.

## Usage

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

## Result

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
