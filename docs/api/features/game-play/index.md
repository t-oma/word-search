# Game Play

The game play feature manages the core game logic: tracking found words, handling user selections, and submitting words.

## Overview

The game play feature provides:

- **State Management** - Using Zustand store with Immer
- **Word Submission** - Validate and register found words
- **Position Tracking** - Track played and selected positions
- **Game Reset** - Clear all game state

## Structure

```
game-play/
├── model/
│   ├── game-store.ts        # Zustand store
│   └── game-store-types.ts   # TypeScript types
└── lib/
    └── useHint.ts          # Hint functionality
```

## Store (model)

The game store manages:

- `foundWords` - Array of correctly found words
- `playedPositions` - All positions that have been played
- `selectedPositions` - Currently selected positions

### State

```typescript
type GamePlayState = {
  foundWords: string[];
  playedPositions: Position[];
  selectedPositions: Position[];
};
```

### Actions

```typescript
type GamePlayActions = {
  actions: {
    clearFoundWords: () => void;
    addFoundWord: (word: string) => void;
    updatePlayedPositions: (positions: Position[]) => void;
    setSelectedPositions: (positions: Position[]) => void;
    resetSelectedPositions: () => void;
    reset: () => void;
    submitWord: (
      words: string[],
      letters: string[][],
      positions: Position[]
    ) => void;
  };
};
```

## Usage

```typescript
import { useGamePlayStore } from "~/features/game-play";

function Game() {
  const { foundWords, actions } = useGamePlayStore();

  // Submit a word
  actions.submitWord(words, letters, positions);

  // Reset game
  actions.reset();

  // Clear found words
  actions.clearFoundWords();
}
```

## Word Submission Flow

```typescript
submitWord(words, letters, positions);
```

### 1. Check if positions are selected

- If empty: return

### 2. Extract word from positions

- Use [itemsAtPositions()](../../shared/utils/matrix#itemsatpositions) to get letters
- Join and lowercase

### 3. Validate word

- Is word in the words list?
- Has word already been found?

### 4. If valid:

- Add to foundWords
- Add positions to playedPositions

### 5. Always:

- Clear selectedPositions

## Integration

The store integrates with:

- **Grid Generator** - Gets letters for word validation
- **Word Selection** - Gets selected positions
- **Stats** - Tracks game completion
