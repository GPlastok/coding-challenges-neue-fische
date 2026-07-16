import { test } from "@/test.ts";

function positiveSum(arr: number[]) {
  // your code here
  const initialValue: number = 0;
  const sumWithInitial: number = arr.reduce((acc: number, n: number)  => 
    n > 0? (acc + n) : acc, initialValue)
  return sumWithInitial;
  }


test(positiveSum([1, 2, 3, 4, 5]), 15);
test(positiveSum([-1, 2, 3, -4, 5]), 10);
test(positiveSum([]), 0);
test(positiveSum([-1, -2, -3]), 0);
test(positiveSum([0, 5, 10]), 15);

