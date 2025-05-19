// ===================================
// 👨‍🏫 JavaScript Basics - Lecture 2
// ===================================
// 🧮 JavaScript Operators, Arithmetic, and Assignment
// ===================================

// ------------------------------
// 1. JavaScript Arithmetic Operators
// ------------------------------

// Used to do math operations with numbers

let a = 10;
let b = 3;

console.log("a + b =", a + b); // ➕ addition → 13
console.log("a - b =", a - b); // ➖ subtraction → 7
console.log("a * b =", a * b); // ✖️ multiplication → 30
console.log("a / b =", a / b); // ➗ division → 3.333...
console.log("a % b =", a % b); // 🔁 modulus (remainder) → 1
console.log("a ** b =", a ** b); // ⬆️ exponentiation → 10³ = 1000

// Why modulus (%) is useful?
let evenNumber = 8;
let oddNumber = 7;

console.log("Is evenNumber even?", evenNumber % 2 === 0); // true
console.log("Is oddNumber even?", oddNumber % 2 === 0); // false

// ------------------------------
// 2. JavaScript Assignment Operators
// ------------------------------

// Used to assign or update variable values

let x = 5; // basic assignment (=)

x += 3; // same as: x = x + 3 → now x = 8
x -= 2; // x = x - 2 → x = 6
x *= 4; // x = x * 4 → x = 24
x /= 6; // x = x / 6 → x = 4
x %= 3; // x = x % 3 → x = 1
x **= 2; // x = x ** 2 → x = 1

console.log("Final value of x:", x);

// Students often confuse assignment and comparison
// =   → assignment
// ==  → loose comparison
// === → strict comparison

// ------------------------------
// 3. JavaScript Comparison Operators
// ------------------------------

// Compare two values and return true/false

let num1 = 5;
let num2 = "5";

console.log(num1 == num2); // true → values are equal (but types can differ)
console.log(num1 === num2); // false → values and types must be equal
console.log(num1 != num2); // false → same value
console.log(num1 !== num2); // true → not exactly equal (type mismatch)

console.log(num1 > 3); // true
console.log(num1 < 10); // true
console.log(num1 >= 5); // true
console.log(num1 <= 4); // false

// Use === and !== in most cases to avoid confusion

// ------------------------------
// 4. JavaScript Logical Operators
// ------------------------------

// Used to combine multiple conditions (mostly in if-statements)

let isAdult = true;
let hasTicket = false;

console.log(isAdult && hasTicket); // false → both must be true
console.log(isAdult || hasTicket); // true → at least one must be true
console.log(!isAdult); // false → not true (reverses value)

// Real-life example
let loggedIn = true;
let hasAccess = true;

if (loggedIn && hasAccess) {
  console.log("Access granted!");
} else {
  console.log("Access denied.");
}

// ------------------------------
// 5. Increment & Decrement Operators
// ------------------------------

let counter = 0;

counter++; // counter = counter + 1
console.log("counter++ =", counter); // 1

counter--; // counter = counter - 1
console.log("counter-- =", counter); // 0

// You can also use ++x and x++, but we’ll cover that deeper in loops

// ------------------------------
// 6. Practice Time
// ------------------------------

// Let’s calculate the total cost of items

let price = 10;
let quantity = 3;
let tax = 0.2; // 20% tax

let total = price * quantity;
total += total * tax; // add tax

console.log("Total price with tax:", total); // should be 36

// ------------------------------
// 7. Recap
// ------------------------------

// ✅ Arithmetic → +, -, *, /, %, **
// ✅ Assignment → =, +=, -=, etc.
// ✅ Comparison → ==, ===, !=, !==, >, <, >=, <=
// ✅ Logical → &&, ||, !
// ✅ Use operators in conditions, calculations, and updates

// ===================================
// End of Lecture 2
// ===================================
