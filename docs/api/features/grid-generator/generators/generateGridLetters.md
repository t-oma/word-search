# generateGridLetters()

Generates the grid letters with words placed and remaining cells filled with random letters.

## Parameters

```typescript
type GenerateGridLettersProps = {
  size: number;
  words: string[];
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
      <td><code>size</code></td>
      <td><code>number</code></td>
      <td>Grid size</td>
    </tr>
    <tr>
      <td><code>words</code></td>
      <td><code>string[]</code></td>
      <td>Words to place</td>
    </tr>
  </tbody>
</table>

## Return

```typescript
type GenerateGridLettersReturn = {
  letters: string[][];
  placedWords: Set<string>;
};
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
      <td><code>letters</code></td>
      <td><code>string[][]</code></td>
      <td>2D grid of letters</td>
    </tr>
    <tr>
      <td><code>placedWords</code></td>
      <td><code>Set&lt;string&gt;</code></td>
      <td>Set of placed words</td>
    </tr>
  </tbody>
</table>

## Usage

```typescript
import { generateGridLetters } from "~/features/grid-generator";

const { letters, placedWords } = generateGridLetters({
  size: 3,
  words: ["CAT", "RAT"],
});
```

## Result

```
Generated Grid:
┌───┬───┬───┐
│ R │ O │ F │  ← "RAT" placed diagonally at row 1 col 1
├───┼───┼───┤
│ M │ A │ G │
├───┼───┼───┤
│ C │ A │ T │  ← "CAT" placed horizontally at row 3 col 1
└───┴───┴───┘           (intersection on letter "T")
```

```typescript
{
  letters: [
    ["R", "O", "F"],
    ["M", "A", "G"],
    ["C", "A", "T"]
  ],
  placedWords: Set(["CAT", "RAT"])
}
```
