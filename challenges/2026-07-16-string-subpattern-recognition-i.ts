/*
https://www.codewars.com/kata/5a49f074b3bfa89b4c00002b
In this kata you need to build a function to return either true/True or false/False if a string can be seen as
the repetition of a simpler/shorter subpattern or not.
hasSubpattern("a") === false; //no repeated pattern
hasSubpattern("aaaa") === true; //created repeating "a"
hasSubpattern("abcd") === false; //no repeated pattern
hasSubpattern("abababab") === true; //created repeating "ab"
hasSubpattern("ababababa") === false; //cannot be entirely reproduced repeating a pattern
*/

import { test } from "@/test.ts";

function hasSubpattern(s: string): boolean {
  // your code here
  let strStatus: boolean = false;
  let letters: string;
  for (const letter of s) {
    if (letter === s[s.indexOf(letter) - 1]) {
      strStatus = true;
    } else if (
      s.slice(s.indexOf(letter) - 1, s.indexOf(letter)) ===
      s.slice(s.indexOf(letter) - 3, s.indexOf(letter) - 2)
    ) {
      strStatus = true;
    } else strStatus = false;
  }

  return strStatus;
}

test(hasSubpattern("a"), false);
test(hasSubpattern("aaaa"), true);
test(hasSubpattern("abcd"), false);
test(hasSubpattern("abababab"), true);
test(hasSubpattern("ababababa"), false);
