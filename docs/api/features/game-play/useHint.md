# useHint

A React hook for providing hint functionality in the Word Search game.

## Overview

The useHint hook helps players find words by:

- Finding positions of unfound words
- Highlighting word positions temporarily
- Limiting the number of hints per game (3 hints)

## Parameters

```typescript
type UseHintProps = {
  size: number;
  words: string[];
  foundWords: string[];
  letters: string[][];
  hintLength?: number;
};
```

<table>
  <thead>
    <tr>
      <th>Prop</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>size</code></td>
      <td><code>number</code></td>
      <td><code>required</code></td>
      <td>Grid size</td>
    </tr>
    <tr>
      <td><code>words</code></td>
      <td><code>string[]</code></td>
      <td><code>required</code></td>
      <td>All words in the puzzle</td>
    </tr>
    <tr>
      <td><code>foundWords</code></td>
      <td><code>string[]</code></td>
      <td><code>required</code></td>
      <td>Already found words</td>
    </tr>
    <tr>
      <td><code>letters</code></td>
      <td><code>string[][]</code></td>
      <td><code>required</code></td>
      <td>Grid letters</td>
    </tr>
    <tr>
      <td><code>hintLength</code></td>
      <td><code>number</code></td>
      <td><code>0</code></td>
      <td>Length of hint (0 = full word)</td>
    </tr>
  </tbody>
</table>

## Return

```typescript
type UseHintReturn = {
  highlightedPositions: Position[];
  hintsUsed: number;
  findWordPositions: (word: string) => Position[] | null;
  handleHint: () => void;
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
      <td><code>highlightedPositions</code></td>
      <td><code>Position[]</code></td>
      <td>Positions to highlight</td>
    </tr>
    <tr>
      <td><code>hintsUsed</code></td>
      <td><code>number</code></td>
      <td>Number of hints used</td>
    </tr>
    <tr>
      <td><code>findWordPositions</code></td>
      <td><code>(word: string) =&gt; Position[] \| null</code></td>
      <td>Find positions for a specific word</td>
    </tr>
    <tr>
      <td><code>handleHint</code></td>
      <td><code>() =&gt; void</code></td>
      <td>Trigger a new hint</td>
    </tr>
  </tbody>
</table>

### Functions

### handleHint()

Triggers a hint. Should be called when the user clicks the hint button.

```typescript
handleHint(): void
```

**Behavior:**

1. Checks if hints are available (limit: 3)
2. Checks if no hint is currently displayed
3. Gets remaining unfound words
4. Selects a random word
5. Finds its positions
6. Highlights positions (for 3 seconds)
7. Increments hints used counter

### findWordPositions(word)

Finds the positions of a specific word in the grid.

```typescript
findWordPositions(word: string): Position[] | null
```

**Algorithm:**

1. Iterates through all grid positions
2. For each position, checks all 3 directions:
   - Horizontal `{dr: 0, dc: 1}`
   - Vertical `{dr: 1, dc: 0}`
   - Diagonal `{dr: 1, dc: 1}`
3. Uses `previewVector()` to get the word at each direction
4. Returns positions if word matches

## Usage

```tsx
import { useHint } from "~/features/game-play";

function Game() {
  const { highlightedPositions, hintsUsed, handleHint } = useHint({
    size: 10,
    words: ["CAT", "DOG", "BIRD"],
    foundWords: foundWords,
    letters: gridLetters,
    hintLength: 2, // Show first 2 letters
  });

  return (
    <div>
      <button onClick={handleHint} disabled={hintsUsed >= 3}>
        Get Hint ({3 - hintsUsed} left)
      </button>

      <Grid
        highlightedPositions={highlightedPositions}
        // ...
      />
    </div>
  );
}
```

## Configuration

### Hint Limit

```typescript
const hintsLimit = 3;
```

The game allows 3 hints per session.

### Highlight Duration

```typescript
setTimeout(() => setHighlightedPositions([]), 3000);
```

Hint highlights last for 3 seconds (3000ms).

## Examples

### Full Word Hint

Show the complete word:

```tsx
const { highlightedPositions, handleHint } = useHint({
  size: 10,
  words: allWords,
  foundWords,
  letters,
  hintLength: 0, // Full word
});
```

### Partial Hint

Show only first N letters:

```tsx
const { highlightedPositions, handleHint } = useHint({
  size: 10,
  words: allWords,
  foundWords,
  letters,
  hintLength: 2, // First 2 letters only
});
```

### With Custom Styling

```tsx
const { highlightedPositions, handleHint, hintsUsed } = useHint({...});

return (
  <div>
    <button
      onClick={handleHint}
      disabled={hintsUsed >= 3}
      className={hintsUsed >= 3 ? "opacity-50" : ""}
    >
      {hintsUsed >= 3 ? "No hints left" : "Show Hint"}
    </button>

    <Grid>
      {cells.map((cell, index) => (
        <Cell
          key={index}
          isHighlighted={highlightedPositions.some(
            p => p.row === cell.row && p.col === cell.col
          )}
        />
      ))}
    </Grid>
  </div>
);
```
