"use strict";

اولا انا شارح بالتفاصيل كل حاجه في الورق وكمان حاطط المصادر في الورق 
هذاكر بس في day 3 
قبل ما اخشها هخلص جزئية section 11 
مع جوناس 
لان زاكرت من مصادر تانية جزئية 
filter , reduce , map 
فهدخلها الاول مع جونس 
console.log("=== CONTROL FLOW ===");

const temperature = 30;

if (temperature > 35) {
  console.log("🔥 It's too hot!");
} else if (temperature > 25) {
  console.log("🌤️ It's warm outside");
} else {
  console.log("❄️ It's cold");
}

const drink = temperature > 25 ? "🍹 Juice" : "☕ Tea";
console.log(`I prefer ${drink}`);

const day = "tuesday";
switch (day) {
  case "monday":
    console.log("🏋️ Go to the gym");
    break;
  case "tuesday":
    console.log("💻 Study JavaScript");
    break;
  case "friday":
    console.log("🎬 Movie night");
    break;
  default:
    console.log("😴 Relaxing day");
}

console.log("\n=== LOOPS ===");

for (let i = 1; i <= 3; i++) {
  console.log(`Loop number: ${i}`);
}

let count = 0;
while (count < 3) {
  console.log(`While loop count: ${count}`);
  count++;
}

console.log("\n=== ARRAYS ===");

const arr1 = [1, 2, 3];
const arr2 = new Array(4, 5, 6);
const arr3 = Array.of(7, 8, 9);
const arr4 = Array.from("Kero");
console.log(arr1, arr2, arr3, arr4);

const numbers = [1, 2, 3, 4, 5];

numbers.push(6);
numbers.pop();
numbers.unshift(0);
numbers.shift();
console.log("After add/remove:", numbers);

console.log(numbers.includes(3));
console.log(numbers.indexOf(4));

const sliced = numbers.slice(1, 3);
console.log("slice:", sliced);

const spliced = numbers.splice(1, 2);
console.log("splice:", spliced);
console.log("numbers after splice:", numbers);

const moreNums = [7, 8];
const allNums = numbers.concat(moreNums);
console.log("concat:", allNums);
console.log("join:", allNums.join(" - "));

const sorted = [...allNums].sort((a, b) => b - a);
console.log("sorted desc:", sorted);

console.log("\n=== SPREAD & REST ===");

const baseArray = [1, 2, 3];
const extendedArray = [...baseArray, 4, 5];
console.log("Spread result:", extendedArray);

function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}
console.log("Sum with rest:", sum(1, 2, 3, 4));

console.log("\n=== DESTRUCTURING ===");

const restaurant = {
  name: "Classico Italiano",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const [first, , third] = restaurant.categories;
console.log("Destructuring:", first, third);

let main = "Pizza";
let secondary = "Pasta";
[main, secondary] = [secondary, main];
console.log("Switched:", main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log("Order:", starter, mainCourse);

const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log("Nested:", i, j, k);

const [p = 1, q = 1, r = 1] = [8, 9];
console.log("Defaults:", p, q, r);

console.log("\n=== OBJECTS ===");

const student = {
  name: "Kero",
  age: 22,
  "favorite subject": "Math",
};

console.log(student.name);

const key = "age";
console.log(student[key]);
console.log(student["favorite subject"]);

student.grade = "A+";
student["hobby"] = "Coding";
console.log(student);

console.log("\n=== map / filter / reduce ===");

const prices = [100, 200, 300];

const withTax = prices.map(price => price * 1.1);
console.log("map:", withTax);

const expensive = withTax.filter(price => price > 250);
console.log("filter:", expensive);

const total = withTax.reduce((sum, price) => sum + price, 0);
console.log("reduce:", total);

console.log("\n=== SAFE OBJECT MERGE ===");

const user = { id: 1, name: "Kero" };
const details = { city: "Cairo", age: 22 };

const merged = { ...user, ...details };
console.log("Merged object:", merged);

console.log("\n=== TINY COLLECTION UTILITIES ===");

const products = [
  { id: 1, name: "Phone", price: 900 },
  { id: 2, name: "Laptop", price: 1800 },
  { id: 3, name: "Mouse", price: 50 },
];

const getNames = products.map(p => p.name);
console.log("Names:", getNames);

const expensiveProducts = products.filter(p => p.price > 1000);
console.log("Expensive:", expensiveProducts);

const totalPrice = products.reduce((acc, p) => acc + p.price, 0);
console.log("Total Price:", totalPrice);

const newProducts = [{ id: 4, name: "Tablet", price: 700 }];
const allProducts = [...products, ...newProducts];
console.log("Merged arrays:", allProducts);
