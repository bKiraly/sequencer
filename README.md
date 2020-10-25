# sequencer - a deno 🦕 module for sequential promises

[Deno](https://deno.land) promise sequencing.

## Usage

To execute promises sequentially, simply add the functions returning the 
promises to an array, and call `await seq(array)`. Your promises will be
executed one sequentially! 🦕

```typescript
import { seq } from "https://deno.land/x/sequencer/mod.ts";

const sleep = (t: number) => new Promise((res) => setTimeout(res, t));

let acc: Array<number> = [];
await seq([
  () => sleep(10).then(() => acc.push(1)),
  () => sleep(20).then(() => acc.push(2)),
  () => sleep(1).then(() => acc.push(3)),
]);

console.log(acc); // > [ 1, 2, 3 ]
```

## Test

```bash
deno test
```

## Format code

```bash
deno fmt
```

## Resources

- [Deno Website](https://deno.land)
- [Deno Style Guide](https://deno.land/std/style_guide.md)
- [Deno Gitter](https://gitter.im/denolife/Lobby)
