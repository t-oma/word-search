# useGenerator()

A React hook that generates grid data automatically based on props.

## Parameters

```typescript
interface UseGeneratorProps {
  size: number;
  difficulty: Difficulty;
  category?: WordsCategory;
}
```

<table>
  <thead>
    <tr>
      <th>Prop</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>size</code></td>
      <td><code>number</code></td>
      <td>Grid size (e.g., 10 for 10x10)</td>
    </tr>
    <tr>
      <td><code>difficulty</code></td>
      <td><code>Difficulty</code></td>
      <td>Difficulty of the puzzle</td>
    </tr>
    <tr>
      <td><code>category?</code></td>
      <td><code>WordsCategory</code></td>
      <td>Optional: force specific category</td>
    </tr>
  </tbody>
</table>

See [Difficulty](../../shared/types#difficulty) and [WordsCategory](../../shared/types#wordscategory) for more details.

## Return

```typescript
interface UseGeneratorReturn {
  words: string[];
  letters: string[][];
}
```

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>words</code></td>
      <td><code>string[]</code></td>
      <td>Array of placed words</td>
    </tr>
    <tr>
      <td><code>letters</code></td>
      <td><code>string[][]</code></td>
      <td>2D grid of letters</td>
    </tr>
  </tbody>
</table>

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
