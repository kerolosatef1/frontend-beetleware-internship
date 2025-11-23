
console.log("انا شارح كل حاجه في الورق ");


let name = "faragello";  
let age = 23;         
let isStudent = false;  

console.log(name, age, isStudent);

let username: string;
let score: number;
username = "Alice";
score = 100;
console.log(username, score);

function add(a: number, b: number): number {
  return a + b;
}
console.log(add(5, 10));

function greet(name: string): string {
  return `Hello ${name}`;
}
console.log(greet("Kerolos"));

let id: string | number;
id = 123;
console.log(id);
id = "abc";
console.log(id);

function printId(id: string | number) {
  if (typeof id === "string") {
    console.log("String ID:", id.toUpperCase());
  } else {
    console.log("Number ID:", id);
  }
}
printId(42);
printId("abc123");

type Person = { name: string; age: number };
type Employee = { employeeId: number };
type Worker = Person & Employee;

const worker: Worker = {
  name: "Kerolos",
  age: 25,
  employeeId: 101
};
console.log(worker);

let direction: "up" | "down" | "left" | "right";
direction = "up";   
console.log(direction);

function move(dir: "up" | "down" | "left" | "right") {
  console.log(`Moving ${dir}`);
}
move("left");

enum Color {
  Red,
  Green,
  Blue
}
const c: Color = Color.Green;
console.log("Enum color:", c);

type ColorUnion = "red" | "green" | "blue";
const myColor: ColorUnion = "red";
console.log(myColor);

function formatInput(input: string | number | boolean) {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else if (typeof input === "number") {
    return input.toFixed(2);
  } else {
    return input ? "TRUE" : "FALSE";
  }
}
console.log(formatInput("hello"));
console.log(formatInput(123.456));
console.log(formatInput(false));

let numbers: number[] = [1, 2, 3, 4];
let names: string[] = ["Alice", "Bob"];
let mixed: (string | number)[] = [1, "Bob", 3];
console.log(numbers, names, mixed);

type Product = {
  id: number;
  name: string;
  price: number;
  tags?: string[];
};

const product1: Product = { id: 1, name: "Laptop", price: 1500 };
const product2: Product = { id: 2, name: "Phone", price: 500, tags: ["tech", "mobile"] };
console.log(product1, product2);

function multiply(a: number, b: number = 2): number {
  return a * b;
}
console.log(multiply(5));
console.log(multiply(5, 3));

function fullName(first: string, last?: string): string {
  return last ? `${first} ${last}` : first;
}
console.log(fullName("Kerolos"));
console.log(fullName("Kerolos", "Atef"));

type Admin = { name: string; privileges: string[] };
type User = { name: string; startDate: Date };

function printInfo(account: Admin | User) {
  console.log("Name:", account.name);
  if ("privileges" in account) {
    console.log("Privileges:", account.privileges);
  }
  if (account instanceof Date) {
    console.log("Account date:", account);
  }
}
const admin: Admin = { name: "Bob", privileges: ["manage-users","edit-content"] };
printInfo(admin);

function sumArray(nums: number[]): number {
  return nums.reduce((acc, val) => acc + val, 0);
}
console.log(sumArray([1,2,3,4]));

function findMax(nums: number[]): number {
  return Math.max(...nums);
}
console.log(findMax([5,12,8]));


export function sum(a: number, b: number): number {
  return a + b;
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function isEven(num: number): boolean {
  return num % 2 === 0;
}
