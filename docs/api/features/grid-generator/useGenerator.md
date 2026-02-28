# useGenerator()

A React hook that generates grid data automatically based on props.

## Parameters:

```typescript
interface UseGeneratorProps {
  size: number; // Grid size (e.g., 10 for 10x10)
  difficulty: Difficulty; // "easy" | "medium" | "hard"
  category?: WordsCategory; // Optional: force specific category
}
```

See [Difficulty](../../shared/types#difficulty) and [WordsCategory](../../shared/types#wordscategory) for more details.

## Return:

```typescript
interface UseGeneratorReturn {
  words: string[]; // Array of placed words
  letters: string[][]; // 2D grid of letters
}
```

## Usage

```typescript
import { useGenerator } from "~/features/grid-generator";

function GameGrid() {
  const { words, letters } = useGenerator({
    size: 10,
    difficulty: "easy",
    category: "animals",
  });

  return (
    <div>
      <div>Words to find: {words.join(", ")}</div>
      <Grid letters={letters} />
    </div>
  );
}
```

## Configuration

The hook uses predefined ranges based on difficulty:

| Difficulty | Word Count | Word Length |
| ---------- | ---------- | ----------- |
| easy       | 3-4        | 3-5         |
| medium     | 5-6        | 4-7         |
| hard       | 6-7        | 5-9         |
