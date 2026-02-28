# generateGridLetters()

Generates the grid letters with words placed and remaining cells filled with random letters.

## Parameters:

```typescript
type GenerateGridLettersProps = {
  size: number;
  words: string[];
};
```

## Return:

```typescript
type GenerateGridLettersReturn = {
  letters: string[][];
  placedWords: Set<string>;
};
```

## Usage:

```typescript
import { generateGridLetters } from "~/features/grid-generator";

const { letters, placedWords } = generateGridLetters({
  size: 3,
  words: ["CAT", "RAT"],
});
```

## Result:

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
