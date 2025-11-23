console.log("انا شارح كل حاجه في الورق ");
let name = "faragello";
let age = 23;
let isStudent = false;
console.log(name, age, isStudent);
let username;
let score;
username = "Alice";
score = 100;
console.log(username, score);
function add(a, b) {
    return a + b;
}
console.log(add(5, 10));
function greet(name) {
    return `Hello ${name}`;
}
console.log(greet("Kerolos"));
let id;
id = 123;
console.log(id);
id = "abc";
console.log(id);
function printId(id) {
    if (typeof id === "string") {
        console.log("String ID:", id.toUpperCase());
    }
    else {
        console.log("Number ID:", id);
    }
}
printId(42);
printId("abc123");
const worker = {
    name: "Kerolos",
    age: 25,
    employeeId: 101
};
console.log(worker);
let direction;
direction = "up";
console.log(direction);
function move(dir) {
    console.log(`Moving ${dir}`);
}
move("left");
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
const c = Color.Green;
console.log("Enum color:", c);
const myColor = "red";
console.log(myColor);
function formatInput(input) {
    if (typeof input === "string") {
        return input.toUpperCase();
    }
    else if (typeof input === "number") {
        return input.toFixed(2);
    }
    else {
        return input ? "TRUE" : "FALSE";
    }
}
console.log(formatInput("hello"));
console.log(formatInput(123.456));
console.log(formatInput(false));
let numbers = [1, 2, 3, 4];
let names = ["Alice", "Bob"];
let mixed = [1, "Bob", 3];
console.log(numbers, names, mixed);
const product1 = { id: 1, name: "Laptop", price: 1500 };
const product2 = { id: 2, name: "Phone", price: 500, tags: ["tech", "mobile"] };
console.log(product1, product2);
function multiply(a, b = 2) {
    return a * b;
}
console.log(multiply(5));
console.log(multiply(5, 3));
function fullName(first, last) {
    return last ? `${first} ${last}` : first;
}
console.log(fullName("Kerolos"));
console.log(fullName("Kerolos", "Atef"));
function printInfo(account) {
    console.log("Name:", account.name);
    if ("privileges" in account) {
        console.log("Privileges:", account.privileges);
    }
    if (account instanceof Date) {
        console.log("Account date:", account);
    }
}
const admin = { name: "Bob", privileges: ["manage-users", "edit-content"] };
printInfo(admin);
function sumArray(nums) {
    return nums.reduce((acc, val) => acc + val, 0);
}
console.log(sumArray([1, 2, 3, 4]));
function findMax(nums) {
    return Math.max(...nums);
}
console.log(findMax([5, 12, 8]));
export function sum(a, b) {
    return a + b;
}
export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
export function isEven(num) {
    return num % 2 === 0;
}
//# sourceMappingURL=utils.js.map