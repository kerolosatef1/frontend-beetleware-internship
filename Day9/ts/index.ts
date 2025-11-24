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

//partial type
type User = {
  username: string;
  age: number;
  email: string;
};

const u1: User = {
  username: "John",
  age: 25,
  email: "john@mail.com"
};

const u2: Partial<User> = {
  username: "John"
};
const u3: Partial<User> = {
  age: 30
};

*/
/*

فكرة ال memozation اللي بيتم استخدمها زيها في useMemo لكن في ال type Script 



export function memoize<T extends (...args: any[]) => any>(fn: T): T {
  const cache: Record<string, ReturnType<T>> = {};

  return ((...args: Parameters<T>): ReturnType<T> => {
    const key = args.join("#");

    if (cache[key] !== undefined) {
      console.log("from cache---", key);
      return cache[key];
    }

    console.log("from new calculate---", key);
    const result = fn(...args);
    cache[key] = result;
    return result;
  }) as T;
}

const memoSum = memoize((x: number, y: number) => x + y);

console.log(memoSum(3, 4)); // from new calculate
console.log(memoSum(3, 4)); // from cache
console.log(memoSum(5, 6)); // from new calculate


*/ 


// memoize.ts



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
