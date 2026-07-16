import { test } from "@/test.ts";

function gooseFilter(birds: string[]): string[] {
  const geese: string[] = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  const birdsSet = new Set(birds);
  const geeseSet = new Set(geese);

  const nonGeeseSet = birdsSet.difference(geeseSet);
  console.log(nonGeeseSet);
  const nonGeeseArr =  [...nonGeeseSet];
  return nonGeeseArr;
  // // your code here
  // birds.map(bird => {
  //   if bird
  // })
}

test(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]), ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);
test(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]), []);
test(gooseFilter(["Mallard", "Hook Bill"]), ["Mallard", "Hook Bill"]);
test(gooseFilter([]), []);
test(gooseFilter(["African", "Duck"]), ["Duck"]);
