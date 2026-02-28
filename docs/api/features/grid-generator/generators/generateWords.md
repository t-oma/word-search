# generateWords()

Generates an array of random words from the word library.

## Parameters:

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

See [Difficulty](../../../shared/types#difficulty) and [WordsCategory](../../../shared/types#wordscategory) for more details.

## Return:

```typescript
string[]
```

## Usage:

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

## Example Result:

```typescript
["CAT", "DOG", "BIRD"];
```
