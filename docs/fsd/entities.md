# Entities Layer

The entities layer represents core business domain models and data structures.

## Purpose

- Domain models representing business concepts
- Business logic related to these models
- Data structures used across features

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

## Entities in This Project

| Entity  | Purpose                                            |
| ------- | -------------------------------------------------- |
| `game`  | Game data models, game cards, games grid           |
| `stats` | Player statistics, stats store (Zustand), stats UI |

## Subdirectories

Each entity typically contains:

| Directory | Purpose                                |
| --------- | -------------------------------------- |
| `model/`  | Type definitions, data, business logic |
| `ui/`     | UI components specific to this entity  |

## Usage

```typescript
import { useStatsStore } from "~/entities/stats";
import type { Game } from "~/entities/game";
import type { RecentGame, Stats } from "~/entities/stats";
```

## See Also

- [API: Entities](../api/entities/overview) - Detailed API documentation
