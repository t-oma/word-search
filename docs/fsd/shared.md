# Shared Layer

The shared layer contains reusable code that can be used across the entire application.

## Purpose

- Utilities used throughout the application
- Custom React hooks
- TypeScript type definitions
- Third-party integrations (analytics, marketing)

## Structure

```
shared/
├── hooks/       # Custom React hooks
├── lib/         # Third-party integrations
├── types/       # TypeScript type definitions
├── utils/       # Utility functions
├── data/        # Static data (words, constants)
└── ui/          # Shared UI components
```

## Subdirectories

| Directory | Purpose                                                 |
| --------- | ------------------------------------------------------- |
| `hooks/`  | Custom React hooks (e.g., `useTimer`)                   |
| `lib/`    | Third-party library integrations (analytics, marketing) |
| `types/`  | TypeScript type definitions (Position, Direction, etc.) |
| `utils/`  | Utility functions (cn, matrix operations)               |
| `data/`   | Static data (word lists, constants)                     |
| `ui/`     | Shared UI components                                    |

## Usage

Import from `~/shared/` alias:

```typescript
import { useTimer } from "~/shared/hooks/useTimer";
import { trackEvent } from "~/shared/lib/analytics";
import { cn } from "~/shared/utils/cn";
import type { Position } from "~/shared/types";
```

## See Also

- [API: Shared](../api/shared/overview) - Detailed API documentation
