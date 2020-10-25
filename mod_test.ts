import { assertEquals, assertThrowsAsync } from "./test_deps.ts";
import { seq } from "./mod.ts";

const sleep = (t: number) => new Promise((res) => setTimeout(res, t));

Deno.test("Test order", async () => {
  let acc: Array<number> = [];
  await seq([
    () => sleep(10).then(() => acc.push(1)),
    () => sleep(20).then(() => acc.push(2)),
    () => sleep(1).then(() => acc.push(3)),
  ]);
  assertEquals(acc, [1, 2, 3]);
});

Deno.test("Test initial value", async () => {
  let acc: Array<number> = [];
  await seq([
    ((num: number) => {
      acc.push(num);
      return num + 1;
    }),
    ((num: number) => {
      acc.push(num);
      return num + 1;
    }),
    ((num: number) => {
      acc.push(num);
      return num + 1;
    }),
  ], 1);
  assertEquals(acc, [1, 2, 3]);
});

Deno.test("Test promise rejection", async () => {
  await assertThrowsAsync(() =>
    seq([
      () => sleep(10),
      () => Promise.reject(new Error("FakeError")),
    ])
  );
});

