# generateWords()

Generates an array of random words from the word library.

## Parameters

```typescript
type GenerateWordsProps = {
  difficulty: Difficulty;
  category?: WordsCategory;
  ranges: {
    count: {
      min: number;
      max: number;
    };
    length: {
      min: number;
      max: number;
    };
  };
};
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
      <td><code>difficulty</code></td>
      <td><code>Difficulty</code></td>
      <td>Difficulty of the puzzle</td>
    </tr>
    <tr>
      <td><code>category?</code></td>
      <td><code>WordsCategory</code></td>
      <td>Optional: force specific category</td>
    </tr>
    <tr>
      <td><code>ranges.count</code></td>
      <td><code>{ min: number; max: number; }</code></td>
      <td>Range for words count</td>
    </tr>
    <tr>
      <td><code>ranges.length</code></td>
      <td><code>{ min: number; max: number; }</code></td>
      <td>Range for words length</td>
    </tr>
  </tbody>
</table>

See [Difficulty](../../../shared/types#difficulty) and [WordsCategory](../../../shared/types#wordscategory) for more details.

## Return

```typescript
string[]
```

## Usage

```typescript
import { generateWords } from "~/features/grid-generator";

const words = generateWords({
  difficulty: "easy",
  category: "animals",
  ranges: {
    count: { min: 3, max: 4 },
    length: { min: 3, max: 5 },
  },
});
```

## Example Result

```typescript
["CAT", "DOG", "BIRD"];
```
