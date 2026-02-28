# Stats Entity

The stats entity contains types, Zustand store, and UI components for tracking player statistics.

## Structure

```
stats/
├── model/
│   ├── types.ts              # Stats type definitions
│   ├── stats-store-types.ts  # Store type definitions
│   └── stats-store.ts       # Zustand store with persistence
└── ui/
    ├── GlobalStats.tsx
    ├── RecentGames.tsx
    └── StatCard.tsx
```

## Types

### Stats

Overall player statistics.

```typescript
import type { Stats } from "~/entities/stats";

interface Stats {
  gamesPlayed: number;
  wordsFound: number;
  averageScore: number;
  bestStreak: number;
  totalTime: number;
  favoriteDifficulty: Difficulty;
}
```

### RecentGame

Information about a recently played game.

```typescript
import type { RecentGame } from "~/entities/stats";

interface RecentGame {
  title: string;
  score: string;
  time: string;
  date: string;
  difficulty: Difficulty;
}
```

## Stats Store

A Zustand store with persistence for managing player statistics.

### Features

- Persists to localStorage (`stats-storage`)
- Uses Immer for immutable updates
- Tracks global stats and recent games

### Usage

```typescript
import { useStatsStore } from "~/entities/stats";

function GameResults() {
  const { context, actions } = useStatsStore();

  // Register a completed game
  actions.registerGame({
    wordsFound: 8,
    totalWords: 10,
    timeTaken: 120,
    difficulty: "easy",
    title: "Animals",
    date: new Date().toISOString(),
  });

  // Access stats
  const stats = context.global;
  const recentGames = context.recentGames;
}
```

### registerGame Parameters

```typescript
interface RegisterGameParams {
  wordsFound: number; // Number of words found
  totalWords: number; // Total words in the game
  timeTaken: number; // Time in seconds
  difficulty: Difficulty; // Game difficulty
  title: string; // Game title
  date: string; // ISO date string
}
```

### Storage

The store persists to localStorage with the key `stats-storage`:

```javascript
{
  "stats-storage": {
    "state": {
      "context": {
        "global": {
          "gamesPlayed": 5,
          "wordsFound": 42,
          "averageScore": 85,
          "bestStreak": 3,
          "totalTime": 600,
          "favoriteDifficulty": "easy"
        },
        "recentGames": [...],
        "playedDifficulties": {...}
      }
    },
    "version": 0
  }
}
```

## UI Components

### GlobalStats

Displays overall player statistics.

```tsx
import { GlobalStats } from "~/entities/stats";

<GlobalStats stats={stats} />;
```

### RecentGames

Displays a list of recently played games.

```tsx
import { RecentGames } from "~/entities/stats";

<RecentGames games={recentGames} />;
```

### StatCard

A reusable card component for displaying individual stats.

```tsx
import { StatCard } from "~/entities/stats";

<StatCard title="Games Played" value={42} icon="🎮" />;
```
