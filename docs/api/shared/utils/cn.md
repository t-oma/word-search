# cn

A utility for merging Tailwind CSS classes with `clsx` and `tailwind-merge`.

```typescript
import { cn } from "~/shared/utils";
```

## Features

- Merges Tailwind CSS classes
- Handles conflicting classes (later classes win)
- Supports conditional classes

## Usage

```typescript
// Basic usage
cn("px-4 py-2", "bg-blue-500");

// With conditional classes
cn("px-4 py-2", isActive && "bg-blue-500", !isDisabled && "hover:bg-blue-600");

// With cx/tailwind-merge behavior
cn("px-4 py-2 bg-red-500", "bg-blue-500");
// Result: "px-4 py-2 bg-blue-500" (bg-red-500 is overwritten)
```
