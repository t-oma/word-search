# Entities Layer Overview

The entities layer represents core business domain models and data structures.

## Structure

```
entities/
├── game/        # Game-related models and UI
│   ├── model/   # Game types and data
│   └── ui/      # Game-related UI components
└── stats/       # Statistics-related models and UI
    ├── model/   # Stats types and store
    └── ui/      # Stats UI components
```

## Entities

| Entity           | Description                              |
| ---------------- | ---------------------------------------- |
| [Game](./game)   | Game data models, game cards, games grid |
| [Stats](./stats) | Player statistics, stats store, stats UI |

## Usage

```typescript
import { useStatsStore } from "~/entities/stats";
import type { Game } from "~/entities/game";
import type { RecentGame, Stats } from "~/entities/stats";
```
