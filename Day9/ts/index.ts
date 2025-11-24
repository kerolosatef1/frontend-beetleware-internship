//rest patern وبعد كده تعالي ناخد نفس فكرة ال challenge بتاعت ال usememo لكن ب typeSCRIPT



function sum(...numbers: number[]) {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}

console.log(sum(1, 2, 3));     
console.log(sum(5, 10, 15, 20)); 











//TYPE alias
/*
type Person = {
  name: string;
  age: number;
};

let user: Person = { name: "Kerolos", age: 22 };
let admin: Person = { name: "Admin", age: 30 };



let articles : [number, string, boolean] = [1, "TypeScript Basics", true];
articles[1].replace("ali","basic"); 
console.log(articles);


enum Direction {
  Up = 1,
  Down = 2,
  Left = 4,
  Right = 8
}
console.log(Direction.Left); // 4

*/
// arrayHelpers.ts


import type { Result } from "./helpers";
import { Ok, Err } from "./helpers";


export function safeMap<T, U>(
  arr: (T | undefined)[],
  mapper: (item: T, index: number) => U
): Result<U[]> {
  try {
    const out: U[] = [];
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      if (item !== undefined) {
        out.push(mapper(item, i));
      }
    }
    return Ok(out);
  } catch (e) {
    return Err(String(e));
  }
}


export function safeFilter<T>(
  arr: (T | undefined)[],
  predicate: (item: T, index: number) => boolean
): Result<T[]> {
  try {
    const out: T[] = [];
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      if (item !== undefined && predicate(item, i)) {
        out.push(item);
      }
    }
    return Ok(out);
  } catch (e) {
    return Err(String(e));
  }
}
