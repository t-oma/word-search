# Shared Layer

The `shared` layer contains reusable utilities, hooks, types, and libraries that can be used across the entire application.

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

## Contents

- [Hooks](./hooks) - Custom React hooks
- [Libraries](./lib) - Analytics and marketing integrations
- [Types](./types) - TypeScript type definitions
- [Utilities](./utils) - Utility functions

## Usage

Import from `~/shared/` alias:

```typescript
import { useTimer } from "~/shared/hooks/useTimer";
import { trackEvent } from "~/shared/lib/analytics";
import { cn } from "~/shared/utils/cn";
import type { Direction, Position } from "~/shared/types";
```
