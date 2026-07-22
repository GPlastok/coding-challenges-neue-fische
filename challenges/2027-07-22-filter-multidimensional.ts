/*
https://www.codewars.com/kata/52840d2b27e9c932ff0016ae/train/javascript
Write a function that gets a sequence and value and returns true/false depending
on whether the variable exists in a multidimentional sequence.

Example:

locate(['a','b',['c','d',['e']]],'e'); // should return true
locate(['a','b',['c','d',['e']]],'a'); // should return true
locate(['a','b',['c','d',['e']]],'f'); // should return false
*/

import { test } from "@/test.ts";

type NestedArray = (unknown | NestedArray)[];

// function locate(array: NestedArray, value: unknown): boolean {
// //   const flatArr = array.map((el) => {
// //     const [...subArr] =
// //       Array.isArray(el) && el.length > 1 === true ? [...el] : el;
// //     console.log(`this is a subbaray: ${subArr}`);
//     // let preflat = [];
//     // preflat.push(subArr);
//     // console.log(`this is preflat: ${preflat}`);

// //     return subArr;
// //   });
// //   console.log(flatArr);
// //   // your code here
// //   return false;
// }

// function locate(array: NestedArray, value: unknown): boolean {
//   const flatArr = array.map((el, i) => {
//     if (Array.isArray(el) && el.length > 1 === true) {
//       console.log(`this is an array:`, el);
//       const flattened = el
//       return el
//       console.log(flattened);
//     }

//     //   Array.isArray(el) && el.length > 1 === true ? el.map(nestedEl => {
//     //     const unNestedEl =
//     //   })
//   });
//   return false;
// }

// function locate(array: NestedArray, value: unknown): boolean {
//   const flatArr = array.flat();
//   console.log(flatArr);
//   return false;
// }

// function locate(array: NestedArray, value: unknown): boolean {
//   //   const flatArr = array.flat();
//   //   console.log(flatArr);
//   const flatArr = array.map((el) => {
//     if (Array.isArray(el) && el.length > 1 === true) {
//       console.log(el.flat());
//       return el.flat();
//     } else return el;
//   });
//   console.log(flatArr);
//   return false;
// }

function locate(array: NestedArray, value: unknown): boolean {
  //   const flatArr = array.flat();
  //   console.log(flatArr);

  let flatArr = array.flat();
  //   for (const el of flatArr) {

  //   }
  while (flatArr.some((el) => Array.isArray(el))) {
    flatArr = flatArr.flat();
  }
  console.log(flatArr);
  const isValueThere: boolean = flatArr.includes(value);
  console.log(isValueThere);
  return isValueThere;
}

test(locate(["a", "b", ["c", "d", ["e"]]], "e"), true);
test(locate(["a", "b", ["c", "d", ["e"]]], "a"), true);
test(locate(["a", "b", ["c", "d", ["e"]]], "f"), false);
test(locate([1, [2, [3, [4]]]], 4), true);
test(locate([1, [2, [3, [4]]]], 5), false);

// locate(["a", "b", ["c", "d", ["e"]]], "e");
