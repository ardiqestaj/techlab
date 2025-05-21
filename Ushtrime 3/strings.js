// ===================================
// 👨‍🏫 JavaScript Basics - Lecture 4
// ===================================
// 📕 Strings, 🛠 String Methods, 🔍 Search, 🧩 Template Strings
// ===================================

// ------------------------------
// 1. What is a String?
// ------------------------------

// A string is a sequence of characters inside quotes

let name = "Albin";
let message = "Hello!";
let sentence = "I'm learning JavaScript.";

console.log(name); // Albin
console.log(typeof name); // string

// You can use single ' or double " quotes — just be consistent
// If you need quotes inside a string, use escape characters:
let quote = 'He said, "JavaScript is fun!"';
console.log(quote);

// ------------------------------
// 2. String Methods (Most Common)
// ------------------------------

// ✅ These are built-in tools to manipulate or inspect strings

let text = "JavaScript is awesome";

// 🔡 .toUpperCase() and .toLowerCase()
console.log(text.toUpperCase()); // "JAVASCRIPT IS AWESOME"
console.log(text.toLowerCase()); // "javascript is awesome"

// 📏 .length → gives number of characters
console.log("Length of text:", text.length); // 21

// 🔎 .includes(substring) → checks if string contains something
console.log(text.includes("awesome")); // true

// 🎯 .indexOf() → finds the first position of a substring
console.log(text.indexOf("Script")); // 4

// ✂️ .slice(start, end) → cuts out a part of the string
console.log(text.slice(0, 10)); // "JavaScript"

// 🔄 .replace() → replaces part of a string
let newText = text.replace("awesome", "powerful");
console.log(newText); // "JavaScript is powerful"

// 🧼 .trim() → removes spaces from start and end
let messy = "   Hello World!   ";
console.log(messy.trim()); // "Hello World!"

// ✏️ .split(separator) → splits a string into an array
let words = text.split(" ");
console.log(words); // ["JavaScript", "is", "awesome"]

// There are MANY more methods like:
// - .charAt(index): get character at position
// - .startsWith(), .endsWith(): check start/end
// - .repeat(n): repeat string
// - .concat(): combine strings
// - .padStart(), .padEnd(): add padding

// No need to memorize all — just understand what’s possible
// You’ll use them more naturally over time

// ------------------------------
// 3. String Searching
// ------------------------------

// Most commonly used for validations or finding things in text

let email = "student@example.com";

console.log(email.includes("@")); // true
console.log(email.endsWith(".com")); // true
console.log(email.startsWith("student")); // true

// Useful when validating inputs or checking for keywords

// ------------------------------
// 4. Template Strings (Template Literals)
// ------------------------------

// ✅ Use backticks (`) instead of quotes
// ✅ Supports variable embedding using ${}

let user = "Driton";
let course = "JavaScript";
let progress = 75;

let message1 =
  user + " has completed " + progress + "% of the " + course + " course.";
let message2 = `${user} has completed ${progress}% of the ${course} course.`;

console.log(message1); // Traditional way
console.log(message2); // ✅ Modern and cleaner

// You can even use expressions:
let price = 10;
let quantity = 3;
console.log(`Total: $${price * quantity}`); // Total: $30

// ✅ Best practice: use template strings whenever building long messages or HTML

// ------------------------------
// 5. Practice Example
// ------------------------------

// Let's say you're building a welcome message

let firstName = "Ella";
let lastName = "Krasniqi";
let fullName = `${firstName} ${lastName}`;
let welcomeMessage = `Welcome, ${fullName}! We're glad to have you.`;

console.log(welcomeMessage);

// You could even write:
// let welcomeMessage = "Welcome, " + firstName + " " + lastName + "! We're glad to have you.";
// But template strings are easier and more readable.

// ------------------------------
// 6. Recap
// ------------------------------

// ✅ Strings hold text in quotes
// ✅ Use string methods to manipulate or search text
// ✅ Use .includes(), .indexOf(), .slice(), .replace(), .split() etc.
// ✅ Template strings use backticks and ${} to build dynamic messages
// ✅ They help make your code cleaner and easier to understand

// ===================================
// End of Lecture 4
// ===================================
