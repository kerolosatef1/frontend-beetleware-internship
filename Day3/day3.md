'use strict'

const arr1 = [7, 8, 9];
console.log(...arr1); // 7 8 9


const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];

console.log(newArr); // [1, 2, 7, 8, 9]


const values = [1, 2, 3];

function sum(a, b, c) {
  console.log(a + b + c);
}

sum(...values); // 6







// function declaration
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const result = fruitProcessor(5, 0); // هنا 5 و 0 هما arguments
console.log(result); // "Juice with 5 apples and 0 oranges"














function calcAge1(birthYear) {
  return 2037 - birthYear;
}
/*
لها اسم واضح
 بتبدأ بكلمة function
 ممكن تتنده قبل ما تتكتب (Hoisting)
*/


console.log(calcAge1(1991));
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
//function declaration بيرتفع تلقائيًا (hoisted).











//Function Expression




//هنا ما بنسميش Function — Function بتبقى قيمة جوه متغير:

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

/*
بتتخزّن كقيمة داخل variable
ملهاش اسم → Anonymous function
 ما ينفعش تستدعيها قبل تعريفها
*/

// Declaration Function vs. Expression Function with closures:
function counter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

const c = counter();
console.log(c()); // 1
console.log(c()); // 2
console.log(c()); // 3


function once(fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
}

const start = once(() => "Started!");
console.log(start()); // Started!
console.log(start()); // نفس النتيجة – مش هيشتغل تاني




function memoize(fn) {
  const cache = {};

  return function (x) {
    if (cache[x]) return cache[x];

    const result = fn(x);
    cache[x] = result;
    return result;
  };
}

const slowDouble = memoize((n) => {
  console.log("Calculating...");
  return n * 2;
});

console.log(slowDouble(10)); // Calculating... 20
console.log(slowDouble(10)); // 20 (من الكاش)





// Arrow Function
const counter = () => {
  let count = 0;
  return () => ++count;
};

const c1 = counter();
console.log(c1());
console.log(c1()); 
console.log(c1()); 



const once = (fn) => {
  let called = false;
  let result;

  return (...args) => {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
};
const start1 = once(() => "Started!");
console.log(start1()); // Started!
console.log(start1()); // Still "Started!" بدون تنفيذ جديد




const memoize = (fn) => {
  const cache = {};

  return (arg) => {
    if (cache[arg] !== undefined) return cache[arg];

    const result = fn(arg);
    cache[arg] = result;
    return result;
  };
};

const slowDouble1 = memoize((n) => {
  console.log("Calculating...");
  return n * 2;
});

console.log(slowDouble1(10)); // Calculating... 20
console.log(slowDouble1(10)); // 20 (من الذاكرة - بدون حساب)



// Lexical Scoping

const outer = () => {
  const name = "Kero";

  const inner = () => {
    console.log(name); // تقدر تشوف المتغير لأنها جوه نفس scope chain
  };

  inner();
};

outer();




