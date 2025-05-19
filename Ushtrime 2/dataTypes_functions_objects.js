// ===================================
// 👨‍🏫 JavaScript Basics - Lecture 3
// ===================================
// 🧠 Data Types, 🛠 Functions, 🧱 Objects
// ===================================

// ------------------------------
// 1. JavaScript Data Types
// ------------------------------

// 🟢 Primitive types (single values)
let name = "Albin"; // string
let age = 25; // number
let isStudent = true; // boolean
let notSet = null; // null (intentional empty)
let unknownValue; // undefined (not assigned yet)
let bigNumber = 1234567890123456789012345678901234567890n; // BigInt
let uniqueKey = Symbol(); // Symbol (for unique identifiers)

// 🟡 Complex types (collections)
let hobbies = ["music", "sports"]; // array (a list of values)
let person = { name: "Albin", age: 25 }; // object (group of related values)

console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isStudent); // boolean
console.log(typeof hobbies); // object (arrays are a type of object)
console.log(typeof person); // object

// ------------------------------
// 2. JavaScript Functions
// ------------------------------

// ❓ What is a function?
// A block of code that we can reuse whenever we need it

// ✅ Why use functions?
// - Avoid repeating code
// - Make code easier to read and test
// - Can accept inputs (parameters) and return results

// 📦 Function declaration (classic way)
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Albin"); // Hello, Albin!
greet("Elira"); // Hello, Elira!

// ➕ Real-life example: Calculate total price
function calculateTotal(price, quantity, taxRate) {
  let total = price * quantity;
  total += total * taxRate;
  return total;
}

let result = calculateTotal(10, 3, 0.2);
console.log("Total with tax:", result); // 36

// 🧪 Function expression (saved in a variable)
const sayBye = function (name) {
  console.log("Goodbye, " + name + "!");
};

sayBye("Albin");

// 🔥 Arrow function (shorter syntax, popular in modern JS)
const add = (a, b) => {
  return a + b;
};

console.log("Sum is:", add(5, 7)); // 12

// Even shorter if only one line
const square = (x) => x * x;
console.log("Square of 4:", square(4)); // 16

// 🧠 Summary:
// - Use `function name() {}` for traditional way
// - Use `const fn = () => {}` for modern arrow style
// - Use parameters to make functions flexible
// - Use `return` to send back values

// ------------------------------
// 3. JavaScript Objects
// ------------------------------

// ❓ What is an object?
// A group of related data stored in key–value pairs

// Example:
let car = {
  brand: "Toyota", // brand = key, "Toyota" = value
  model: "Corolla", // model = key, "Corolla" = value
  year: 2022, // year = key, 2022 = value
  start: function () {
    console.log("The car is starting...");
  },
};

// Access object values:
console.log(car.brand); // Toyota
console.log(car["model"]); // Corolla
car.start(); // calls the method (function inside object)

// ✅ Why use objects?
// - Group related data together
// - Represent real-world things (like a car, user, product, etc.)

// Update values:
car.year = 2023;
console.log(car.year); // 2023

// ------------------------------
// 🌟 EXPLAINING key-value clearly
// ------------------------------

// 🔑 KEY: the name or label (like "name", "age", etc.)
// 📦 VALUE: the actual data stored for that key (like "Ella", 17, etc.)

// 🧍 Real-world example: Student object
let student = {
  name: "Ella", // key = "name", value = "Ella"
  age: 17, // key = "age", value = 17
  isStudent: true, // key = "isStudent", value = true
  subjects: ["Math", "English"], // key = "subjects", value = array
  greet: function () {
    console.log("Hi, my name is " + this.name);
  },
};

student.greet(); // Hi, my name is Ella
console.log(student.subjects[0]); // Math

// Add a new key-value pair
student.grade = "12th";
console.log(student.grade); // 12th

// ------------------------------
// 4. Practice Challenge
// ------------------------------

// Create a function that accepts a person object and logs a message

function introducePerson(personObj) {
  console.log("This is " + personObj.name + ", aged " + personObj.age);

  // ❗ Why "They are a student." even though it's one person?
  // In modern English, "they" can refer to one person when we don’t know or want to avoid gender
  // But you can also say: `${personObj.name} is a student.` if you prefer.

  if (personObj.isStudent) {
    console.log("They are a student."); // ✅ gender-neutral, singular
    // console.log(personObj.name + " is a student."); // ← alternative
  } else {
    console.log("They are not a student.");
  }
}

let user = {
  name: "Driton",
  age: 30,
  isStudent: false,
};

introducePerson(user);

// ------------------------------
// 5. Recap
// ------------------------------

// ✅ Data types: string, number, boolean, null, undefined, object, array
// ✅ Functions: reusable blocks that take input and return output
// ✅ Objects: group related info using key-value pairs
// ✅ "They are a student" is gender-neutral and modern English

// ===================================
// End of Lecture 3
// ===================================
