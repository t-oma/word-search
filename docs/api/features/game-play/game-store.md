# Game Store

Zustand store with Immer for managing game play state.

## Overview

The game store manages the state of the Word Search game, including found words, played positions, and selected positions.

## State

```typescript
type GamePlayState = {
  foundWords: string[];
  playedPositions: Position[];
  selectedPositions: Position[];
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
      <td><code>foundWords</code></td>
      <td><code>string[]</code></td>
      <td>Array of correctly found words</td>
    </tr>
    <tr>
      <td><code>playedPositions</code></td>
      <td><code>Position[]</code></td>
      <td>All positions that have been played</td>
    </tr>
    <tr>
      <td><code>selectedPositions</code></td>
      <td><code>Position[]</code></td>
      <td>Currently selected positions</td>
    </tr>
  </tbody>
</table>

See [Position](../../shared/types#position) for more details.

## Actions

### clearFoundWords

Clears all found words.

```typescript
actions.clearFoundWords(): void
```

### addFoundWord

Adds a word to the found words list.

```typescript
actions.addFoundWord(word: string): void
```

### updatePlayedPositions

Updates played positions by adding new positions.

```typescript
actions.updatePlayedPositions(positions: Position[]): void
```

### setSelectedPositions

Sets the currently selected positions.

```typescript
actions.setSelectedPositions(positions: Position[]): void
```

### resetSelectedPositions

Clears the selected positions.

```typescript
actions.resetSelectedPositions(): void
```

### reset

Resets the entire game state.

```typescript
actions.reset(): void
```

- Sets `foundWords` to `[]`
- Sets `playedPositions` to `[]`
- Sets `selectedPositions` to `[]`

### submitWord

Validates and submits the selected word.

```typescript
actions.submitWord(
  words: string[],
  letters: string[][],
  positions: Position[]
): void
```

#### Parameters

| Parameter   | Type         | Description                     |
| ----------- | ------------ | ------------------------------- |
| `words`     | `string[]`   | All words to find in the puzzle |
| `letters`   | `string[][]` | The grid letters                |
| `positions` | `Position[]` | Selected positions              |

#### Logic

1. Returns if `selectedPositions` is empty
2. Extracts the word from selected positions using `itemsAtPositions`
3. Validates the word:
   - Must be in the words list
   - Must not already be found
4. If valid: adds word to `foundWords` and positions to `playedPositions`
5. Always clears `selectedPositions`

## Usage

```typescript
import { useGamePlayStore } from "~/features/game-play";

function GameComponent() {
  const { foundWords, playedPositions, selectedPositions, actions } =
    useGamePlayStore();

  const handleSubmit = () => {
    actions.submitWord(words, letters, selectedPositions);
  };

  const handleReset = () => {
    actions.reset();
  };
}
```

## Default State

```typescript
const defaultInitState: GamePlayState = {
  foundWords: [],
  playedPositions: [],
  selectedPositions: [],
};
```
