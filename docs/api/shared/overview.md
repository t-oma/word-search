# Shared Layer Overview

The shared layer contains reusable utilities, hooks, types, and libraries.

## Structure

```
shared/
├── hooks/       # Custom React hooks
├── lib/         # Third-party integrations (analytics, marketing)
├── types/       # TypeScript type definitions
├── utils/       # Utility functions
├── data/        # Static data (words, constants)
└── ui/          # Shared UI components
```

## Import Alias

Use the `~/shared/` alias to import from shared layer:

```typescript
import { useTimer } from "~/shared/hooks/useTimer";
import { trackEvent } from "~/shared/lib/analytics";
import { cn } from "~/shared/utils/cn";
import type { Direction, Position } from "~/shared/types";
```

## Subdirectories

| Directory                  | Description                                     |
| -------------------------- | ----------------------------------------------- |
| [Hooks](./hooks)           | Custom React hooks                              |
| [Types](./types)           | TypeScript type definitions                     |
| [Utilities](./utils/cn.md) | Utility functions (cn, matrix operations)       |
| [Lib](./lib)               | Third-party integrations (analytics, marketing) |
