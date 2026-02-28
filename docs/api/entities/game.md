# Game Entity

The game entity contains types, data, and UI components related to the word search games.

## Structure

```
game/
├── model/
│   ├── types.ts    # Game type definitions
│   └── games.ts    # Static game data
└── ui/
    ├── GameCard.tsx
    └── GamesGrid.tsx
```

## Types

### Game

Represents a word search game.

```typescript
import type { Game } from "~/entities/game";

interface Game {
  id: number;
  title: string;
  link: string;
  wordsCategory: WordsCategory;
  icon?: string;
}
```

### Properties

| Property        | Type            | Description                   |
| --------------- | --------------- | ----------------------------- |
| `id`            | `number`        | Unique identifier             |
| `title`         | `string`        | Display title                 |
| `link`          | `string`        | Route to the game             |
| `wordsCategory` | `WordsCategory` | Category of words in the game |
| `icon`          | `string?`       | Optional emoji icon           |

## Available Games

```typescript
import { games } from "~/entities/game";

const availableGames = [
  {
    id: 1,
    title: "Weather",
    link: "/weather",
    wordsCategory: "weather",
    icon: "☀️",
  },
  {
    id: 2,
    title: "Animals",
    link: "/animals",
    wordsCategory: "animals",
    icon: "🐾",
  },
  {
    id: 3,
    title: "Colors",
    link: "/colors",
    wordsCategory: "colors",
    icon: "🎨",
  },
  {
    id: 4,
    title: "Fruits",
    link: "/fruits",
    wordsCategory: "fruits",
    icon: "🍎",
  },
];
```

## UI Components

### GameCard

A card component displaying game information.

```tsx
import { GameCard } from "~/entities/game";

<GameCard game={game} onClick={() => navigate(game.link)} />;
```

### GamesGrid

A grid layout for displaying multiple game cards.

```tsx
import { GamesGrid } from "~/entities/game";

<GamesGrid games={games} onSelect={handleSelect} />;
```
