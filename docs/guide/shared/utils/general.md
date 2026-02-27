# General Utilities

## isBrowser

A boolean value indicating whether the code is running in a browser environment.

```typescript
import { isBrowser } from "~/shared/utils/utils";

if (isBrowser) {
  console.log("Running in a browser environment");
}
```

## getRandomLetter

Returns a random letter from the alphabet.

```typescript
import { getRandomLetter } from "~/shared/utils/utils";

console.log(getRandomLetter()); // "A"
```

## gridLetters

Generates 2-dimensional array of letters.

```typescript
import { gridLetters } from "~/shared/utils/utils";

const letters = gridLetters(3);

console.log(letters); // [["A", "B", "C"], ["D", "E", "F"], ["G", "H", "I"]]
```

## clamp

Clamps a value between a minimum and maximum.

```typescript
import { clamp } from "~/shared/utils/utils";

console.log(clamp(5, 0, 10)); // 5
console.log(clamp(-5, 0, 10)); // 0
console.log(clamp(15, 0, 10)); // 10
```

## shuffle

Shuffles an array.

```typescript
import { shuffle } from "~/shared/utils/utils";

const array = [1, 2, 3, 4, 5];
const shuffled = shuffle(array);

console.log(shuffled); // [2, 1, 4, 3, 5]
```

## capitalize

Capitalizes the first letter of a string.

```typescript
import { capitalize } from "~/shared/utils/utils";

console.log(capitalize("hello")); // "Hello"
```

## parseIntSafe

Safely parses an integer from a string.

```typescript
import { parseIntSafe } from "~/shared/utils/utils";

console.log(parseIntSafe("5")); // 5
console.log(parseIntSafe("5.5")); // null
console.log(parseIntSafe("abc")); // null
```
