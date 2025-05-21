// ===================================
// 👨‍🏫 JavaScript Basics – Lecture 6
// ===================================
// ⚙️ Control Flow: if, else, switch, logic
// ===================================

// ------------------------------
// 1. Why Do We Need Control Flow?
// ------------------------------
// ✅ Control flow allows our code to make decisions and behave differently
// based on conditions. Just like real life: “if it's raining, bring an umbrella.”

// Example: student age check
let age = 17;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// ------------------------------
// 2. if / else if / else
// ------------------------------

let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// ✅ You can check as many conditions as needed with else if

// ------------------------------
// 3. Comparison Operators
// ------------------------------

/*
==   → equal (loose)
===  → equal (strict, checks type too)
!=   → not equal
!==  → not equal (strict)
>    → greater than
<    → less than
>=   → greater or equal
<=   → less or equal
*/

// Examples
console.log(5 == "5"); // true (loose)
console.log(5 === "5"); // false (strict)
console.log(10 !== 5); // true
console.log(15 > 10); // true

// ------------------------------
// 4. Logical Operators
// ------------------------------

/*
&& → AND → both sides must be true
|| → OR  → at least one side must be true
!  → NOT → reverses true/false
*/

let hasAccount = true;
let isLoggedIn = false;

if (hasAccount && isLoggedIn) {
  console.log("Show dashboard");
} else {
  console.log("Redirect to login");
}

let temperature = 28;

if (temperature > 30 || temperature < 5) {
  console.log("Extreme weather warning!");
}

// ------------------------------
// 5. Real-World Example: Traffic Light
// ------------------------------

let light = "yellow";

if (light === "green") {
  console.log("Go");
} else if (light === "yellow") {
  console.log("Slow down");
} else if (light === "red") {
  console.log("Stop");
} else {
  console.log("Light malfunction");
}

// ------------------------------
// 6. switch Statement
// ------------------------------
// ✅ Alternative to multiple if/else when checking the same variable

let day = "Saturday";

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("Weekday");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;
  default:
    console.log("Invalid day");
    break;
}

// ------------------------------
// 7. Truthy & Falsy Values
// ------------------------------

// JavaScript treats some values as false automatically

let value;

if (value) {
  console.log("This is truthy");
} else {
  console.log("This is falsy");
}

/*
Falsy values include:
- false
- 0
- "" (empty string)
- null
- undefined
- NaN

Everything else is truthy
*/

// ------------------------------
// 8. Common Mistakes
// ------------------------------

// ❌ Assignment instead of comparison:
let loggedIn = true;
if ((loggedIn = false)) {
  // <- This assigns, doesn't compare!
  console.log("Oops");
}

// ✅ Should be:
if (loggedIn === false) {
  console.log("Now it's correct");
}

// ------------------------------
// 9. Practice Challenges
// ------------------------------

// ✅ 1. Check if a user has both a username and password

let username = "albin";
let password = "123456";

if (username && password) {
  console.log("Login successful");
} else {
  console.log("Missing username or password");
}

// ✅ 2. Check age and country for driving license

let driverAge = 19;
let country = "Germany";

if (driverAge >= 18 && country === "Germany") {
  console.log("You can get a driving license");
} else {
  console.log("You’re not eligible yet");
}

// ✅ 3. switch → emoji mood selector

let mood = "happy";

switch (mood) {
  case "happy":
    console.log("😊");
    break;
  case "sad":
    console.log("😢");
    break;
  case "angry":
    console.log("😠");
    break;
  default:
    console.log("😐");
}

// 10. Ternary Operator (Short If)
// ------------------------------

// ✅ Used for simple "if-else" decisions in one line
// Syntax: condition ? resultIfTrue : resultIfFalse

let myAge = 20;

let access = myAge >= 18 ? "Access granted" : "Access denied";
console.log(access); // "Access granted"

// ❗ Ternary is useful for small conditions, not large blocks

let isDarkMode = true;
let theme = isDarkMode ? "Dark Theme" : "Light Theme";
console.log(theme);

// ✅ Example: Show message if cart is empty

let cartItems = [];

let message =
  cartItems.length === 0 ? "Your cart is empty" : "You have items in your cart";
console.log(message);

// ------------------------------
// 11. Recap
// ------------------------------

// ✅ Use if/else to control logic
// ✅ Comparison: ===, >, <= etc.
// ✅ Logical: &&, ||, !
// ✅ Use switch when comparing one variable to many values
// ✅ Falsy values = 0, "", null, undefined, NaN
// ✅ Watch for = vs === !

// ===================================
// End of Lecture 6
// ===================================
