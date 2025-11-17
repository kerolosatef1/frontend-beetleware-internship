'use strict';
const person = {
  name: "Kerolos",
  year: 2002,
  calcAge() {
    console.log(this); // person
    console.log(2025 - this.year);
  },
};

person.calcAge();






function test() {
  console.log(this); // undefined
}

//this = window  لو مش strict mode

test();



const person1 = {
  name: "Kerolos",
  year: 2002,
  calcAge: function () {
    console.log(this); // person

    const isAdult = () => {
      console.log(this); // من ال parent → person
    };

    isAdult();
  },
};

person1.calcAge();






const calcAgge = function (birthYear) {
  console.log(2025 - birthYear);
  console.log(this); // undefined
}   
calcAgge(2002);

const calcAggeArrow = (birthYear) => {
  console.log(2025 - birthYear);
  console.log(this); // window
}   
calcAggeArrow(2002);





const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    console.log(this);       
    this.style.background = "blue";  
     this.style.color = "white";
});
});




const person2 = {
  name: "Jonas",
  hobbies: ["coding", "reading"]
};


const copy1 = { ...person2 };


const copy2 = structuredClone(person2);

copy1.hobbies.push("swimming"); 


copy2.hobbies.push("gaming");
console.log(person2.hobbies);
console.log(copy1.hobbies);
console.log(copy2.hobbies);




const obj = {
  name: "Alice",
  greet: function(message = "Hello") {
    console.log(`${message}, ${this.name}!`);
  }
};


obj.greet(); 
obj.greet.call({ name: "Bob" }, "Hi");


obj.greet.apply({ name: "Charlie" }, ["Good morning"]); 


const boundGreet = obj.greet.bind({ name: "David" }, "Hey");
boundGreet(); // "Hey, David!"



//Method Borrowing
const person5 = {
  fullName: function(title) {
    return `${title} ${this.first} ${this.last}`;
  }
};

const john = { first: "John", last: "Doe" };
console.log(person5.fullName.call(john, "Mr.")); // "Mr. John Doe"
console.log(person5.fullName.apply(john, ["Dr."])); // "Dr. John D 
// 



function sum() {
  const args = Array.prototype.slice.call(arguments);
  return args.reduce((s, v) => s + v, 0);
}
console.log(sum(1,2,3)); // 6






// IMPLICIT BINDING
const user = {
    name: "Alice",
    greet() {
        console.log("Hello " + this.name);
    }
};

user.greet();

// EXPLICIT BINDING
function introduce(age, city) {
    console.log("I am " + this.name + ", " + age + ", from " + city);
}

const p1 = { name: "Mark" };
const p2 = { name: "Sarah" };

introduce.call(p1, 30, "London");
introduce.apply(p2, [22, "Paris"]);

const bound = introduce.bind({ name: "David" }, 40, "Berlin");
bound();









function Person11(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
}

Person11.prototype.calcAge = function () {
    console.log(2025 - this.birthYear);
};

Person11.prototype.introduce = function () {
    console.log("My name is " + this.name);
};

const john11 = new Person("John", 2000);
const emma = new Person("Emma", 1995);

john11.calcAge();
emma.introduce();




console.log(john11.__proto__ === Person11.prototype);
console.log(Person11.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);


