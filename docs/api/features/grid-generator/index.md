# Grid Generator

The grid generator is one of the most important features of the Word Search game. It generates the puzzle grid by placing words randomly and filling empty cells with random letters.

## Overview

The grid generator performs the following steps:

1. **Select Words** - Randomly selects words from the word library based on difficulty and category
2. **Place Words** - Attempts to place each word at random positions and directions
3. **Fill Empty Cells** - Fills remaining empty cells with random letters
4. **Return Results** - Returns the generated grid and list of placed words

## Algorithm

### Word Placement Process

```
generateGridLetters()

For each word:
┌─────────────────────────────────────────────────────┐
│ Try up to 100 attempts:                             │
│   1. Select random direction (weighted)             │
│   2. Select random position                         │
│   3. Check if word fits (bounds check)              │
│   4. Check for letter conflicts                     │
│   5. If OK: place word, update direction counts     │
│   6. If FAIL: try again                             │
└─────────────────────────────────────────────────────┘

After all words: fillRandomLetters()
```

### Direction Weighting

The algorithm uses weighted random direction selection to ensure variety:

- If horizontal words < vertical/diagonal → higher chance for horizontal
- If vertical words < horizontal/diagonal → higher chance for vertical
- If diagonal words < horizontal/vertical → higher chance for diagonal

## Types

### DirectionCounts

Tracks the number of words placed in each direction.

```typescript
type DirectionCounts = {
  horizontal: number;
  vertical: number;
  diagonal: number;
};
```

## Word Library

The generator uses words from `~/shared/data/words` organized by:

- **Categories**: animals, food, countries, sports, movies, music, technology, nature
- **Difficulties**: easy, medium, hard

Each category contains word lists filtered by length suitable for different grid sizes.

## Error Handling

The generator throws errors if:

1. No words found for the specified category and difficulty
2. No suitable words found for the specified size range

```typescript
try {
  const words = generateWords({
    difficulty: "hard",
    category: "unknown_category",
    ranges: { count: { min: 3, max: 5 }, length: { min: 3, max: 5 } },
  });
} catch (error) {
  // Error: No words found for category unknown_category and difficulty hard
}
```
