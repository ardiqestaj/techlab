// ===================================
// 👨‍🏫 JavaScript Basics - Lecture 1
// ===================================

// ------------------------------
// 1. Why Use Variables?
// ------------------------------

// Hardcoded values
console.log("John is 20 years old.");
console.log("John will be 21 next year.");
console.log("John's favorite color is blue.");

// Better with variables
let name = "John";
let age = 20;
let favoriteColor = "blue";

console.log(name + " is " + age + " years old.");
console.log(name + " will be " + (age + 1) + " next year.");
console.log(name + "'s favorite color is " + favoriteColor + ".");

// Why variables?
// ✅ Reusable
// ✅ Easier to update
// ✅ Makes code dynamic and cleaner

// ------------------------------
// 2. var, let, const
// ------------------------------

// var (old way - avoid using it)
var nickname = "Alice";
var nickname = "Bob"; // allowed, but confusing
console.log(nickname); // Bob

// let (modern - allows reassignment)
let city = "Berlin";
city = "Paris"; // ✅ ok
console.log(city); // Paris

// const (value never changes)
const country = "Germany";
// country = "France"; // ❌ Error! Cannot reassign a const
console.log(country);

// BUT: const allows object content to change
const person = {
  name: "Emma",
  age: 30,
};

person.age = 31; // ✅ ok
console.log(person.age); // 31

// ------------------------------
// 3. What Can Be Stored in Variables?
// ------------------------------

let studentName = "Albin"; // string
let studentAge = 30; // number
let isStudent = true; // boolean
let hobbies = ["coding", "reading"]; // array
let profile = { name: "Albin", age: 30 }; // object
let emptyValue = null; // null (intentional nothing)
let notDefined; // undefined (has no value yet)

console.log(studentName, studentAge, isStudent);
console.log(hobbies);
console.log(profile);

// ------------------------------
// 4. Variable Naming Rules
// ------------------------------

let userName = "Mira"; // ✅ good
let _score = 99; // ✅ valid
// let 1name = "Error"; // ❌ invalid: can't start with number

// ✅ Use clear, meaningful names
// ✅ camelCase is recommended
// ❌ Don’t use JavaScript reserved words like "let", "const", "function", etc.

// ------------------------------
// 5. Math Operations
// ------------------------------

let x = 10;
let y = 5;

console.log("x + y =", x + y); // 15
console.log("x - y =", x - y); // 5
console.log("x * y =", x * y); // 50
console.log("x / y =", x / y); // 2

// ------------------------------
// 6. String Operations
// ------------------------------

let firstName = "John";
let lastName = "Doe";

console.log("Full name:", firstName + " " + lastName); // "John Doe"

let greeting = "Hello, " + firstName + "!";
console.log(greeting); // "Hello, John!"

// ------------------------------
// 7. Practice Challenge
// ------------------------------

// Create a variable for a student
let student = "Ella";
let ageOfStudent = 17;
let favSubject = "Math";
let passedExam = true;

console.log(student + " is " + ageOfStudent + " years old.");
console.log("Favorite subject:", favSubject);
console.log("Passed the exam?", passedExam);

// ------------------------------
// 8. Reassigning Values
// ------------------------------

let score = 10;
score = score + 5; // 15
score += 10; // 25
score *= 2; // 50
console.log("Final score:", score);

// const does NOT allow reassignment
const fixedScore = 100;
// fixedScore += 10; // ❌ Error
console.log("Fixed score:", fixedScore);

// ------------------------------
// 9. Recap
// ------------------------------

// ✅ Use variables to make code flexible
// ✅ Use let for changing values
// ✅ Use const when value should never change
// ❌ Avoid var — it’s confusing and outdated

// ✅ Practice and repeat these concepts

// ===================================
// End of Lecture 1
// ===================================
