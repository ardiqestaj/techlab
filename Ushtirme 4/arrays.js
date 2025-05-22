// ===================================
// 👨‍🏫 JavaScript Basics - Lecture 5
// ===================================
// 📦 Arrays, 🛠 Array Methods, 🧮 Matrix Arrays (2D)
// ===================================

// ------------------------------
// 1. What is an Array?
// ------------------------------

// An array is a list of items stored in a single variable.
// Use square brackets [] to define an array.

let fruits = ["apple", "banana", "cherry"];

console.log(fruits); // ["apple", "banana", "cherry"]
console.log(fruits.length); // 3 → number of items in the array

// You can access items using their index (starting at 0)
console.log(fruits[0]); // "apple"
console.log(fruits[2]); // "cherry"

// Arrays can hold ANY data type (even mixed types)
let random = [42, "hello", true, null];
console.log(random);

// ------------------------------
// 2. Real-World Examples
// ------------------------------

// ✅ Shopping cart
let cart = ["milk", "bread", "eggs"];

// ✅ List of students
let students = ["Jonida", "Liridona", "Arber", "Elira"];

// ✅ Favorite numbers
let luckyNumbers = [3, 7, 13, 21];

// ------------------------------
// 3. Modifying Arrays
// ------------------------------

let colors = ["red", "green", "blue"];

colors[1] = "yellow"; // Change "green" to "yellow"
console.log(colors); // ["red", "yellow", "blue"]

// Add new value
colors[3] = "purple";
console.log(colors); // ["red", "yellow", "blue", "purple"]

// ------------------------------
// 4. Common Array Methods
// ------------------------------

// We'll go deeper into a few of these and just list the others.

// 🔚 push() → adds to the end
colors.push("pink");
console.log(colors); // ["red", "yellow", "blue", "purple", "pink"]

// 🔙 pop() → removes last item
let last = colors.pop();
console.log(last); // "pink"
console.log(colors); // ["red", "yellow", "blue", "purple"]

// 🔙 shift() → removes first item
let first = colors.shift();
console.log(first); // "red"
console.log(colors); // ["yellow", "blue", "purple"]

// 🔛 unshift() → adds to the beginning
colors.unshift("black");
console.log(colors); // ["black", "yellow", "blue", "purple"]

// 🧼 slice(start, end) → returns a part of the array
let someColors = colors.slice(1, 3); // not including index 3
console.log(someColors); // ["yellow", "blue"]

// 🔄 splice(index, count, newItem) → removes/adds items
colors.splice(2, 1, "orange"); // replace index 2
console.log(colors); // ["black", "yellow", "orange", "purple"]

// 🔡 sort() → alphabetically or numerically (default)
let letters = ["d", "a", "c", "b"];
letters.sort();
console.log(letters); // ["a", "b", "c", "d"]

// 🔁 reverse() → reverse order
letters.reverse();
console.log(letters); // ["d", "c", "b", "a"]

// ❓ indexOf() → find position
console.log(colors.indexOf("orange")); // 2

// ✅ includes() → check if exists
console.log(colors.includes("black")); // true

// ➕ join() → combine into a string
console.log(colors.join(", ")); // "black, yellow, orange, purple"

// 💥 concat() → merge arrays
let warmColors = ["red", "orange"];
let coolColors = ["blue", "green"];
let palette = warmColors.concat(coolColors);
console.log(palette); // ["red", "orange", "blue", "green"]

// ------------------------------
// 5. Looping Through Arrays
// ------------------------------

const names = ["Lira", "Elton", "Beni"];

// ➿ for loop (manual control)
for (let i = 0; i < names.length; i++) {
  console.log(`Index ${i}: ${names[i]}`);
}

// 🌀 for...of loop (cleaner, no index)
for (const name of names) {
  console.log("Student:", name);
}

// 🔧 forEach (runs a function for each element)
names.forEach((name, index) => {
  console.log(`${index + 1}. Hello, ${name}`);
});

// Summary:
// - `for`: use if you need `break`, `continue`, or control index
// - `for...of`: use if you just need values
// - `forEach`: use to run something for each item (like printing)

// ------------------------------
// 7. Filtering and Transforming Arrays
// ------------------------------

// ✅ .filter() – keeps only matching values
const ages = [16, 18, 21, 14, 30];
const adults = ages.filter((age) => age >= 18);
console.log("Adults:", adults); // [18, 21, 30]

// ✅ .map() – transforms each item
const prices = [10, 20, 30];
const withTax = prices.map((price) => price * 1.2);
console.log("Prices with tax:", withTax); // [12, 24, 36]

// ✅ .find() – gets the first match
const userNames = ["Arta", "Bora", "Doni"];
const startsWithD = userNames.find((name) => name.startsWith("D"));
console.log("Name starting with D:", startsWithD); // Doni

// ✅ .flat() – flattens nested arrays one level
const nested = [1, 2, [3, 4], [5, 6]];
const flatOne = nested.flat();
console.log("Flattened:", flatOne); // [1, 2, 3, 4, 5, 6]

// ✅ .flatMap() – map + flatten in one step
const phrases = ["hi", "ok"];
const splitLetters = phrases.flatMap((word) => word.split(""));
console.log("FlatMap result:", splitLetters); // ['h', 'i', 'o', 'k']

// ------------------------------
// 8. Practice with map/filter/flatMap
// ------------------------------

// Create an array of student scores and return only the scores above 70
const scoresStudents = [65, 72, 80, 50, 95];
const passed = scoresStudents.filter((score) => score >= 70);
console.log("Passed students:", passed);

// Convert each name to uppercase
const rawNames = ["elira", "jonida", "albin"];
const uppercased = rawNames.map((name) => name.toUpperCase());
console.log("Uppercased names:", uppercased);

// Flat map a list of sentences into words
const sentences = ["i love js", "arrays are cool"];
const words = sentences.flatMap((sentence) => sentence.split(" "));
console.log("All words:", words);

// ------------------------------
// 9. Matrix Arrays (2D arrays) – Reuse
// ------------------------------

const seating = [
  ["Anna", "Ben", "Charlie"],
  ["Doni", "Elira", "Fiona"],
  ["Gresa", "Hana", "Ilir"],
];

for (let row = 0; row < seating.length; row++) {
  console.log(`Row ${row + 1}:`);
  for (let seat = 0; seat < seating[row].length; seat++) {
    console.log("  Seat:", seating[row][seat]);
  }
}

// ------------------------------
// 10. Recap (Updated)
// ------------------------------

// ✅ for → index control, supports break/continue
// ✅ for...of → loop values simply
// ✅ forEach → loop with a callback
// ✅ filter → keep only matching items
// ✅ map → transform every item
// ✅ find → return first match
// ✅ flat → remove 1 layer of nested arrays
// ✅ flatMap → map + flat in one go
// ✅ 2D arrays (matrix) = arrays inside arrays

// ===================================
// End of Lecture 5 – Final Version
// ===================================

// ------------------------------
// 7. Practice Challenges
// ------------------------------

// ✅ Challenge 1: Create an array of 5 cities and sort them alphabetically
let cities = ["Berlin", "Prishtina", "Zurich", "London", "Tirana"];
cities.sort();
console.log("Sorted cities:", cities);

// ✅ Challenge 2: Create a function that returns the last item of any array
function getLastItem(array) {
  return array[array.length - 1];
}
console.log(getLastItem(["cat", "dog", "bird"])); // bird

// ✅ Challenge 3: Create a 2D array for exam scores and print averages
let scores = [
  [80, 90, 85], // Student 1
  [75, 70, 60], // Student 2
  [100, 95, 90], // Student 3
];

for (let i = 0; i < scores.length; i++) {
  let sum = 0;
  for (let j = 0; j < scores[i].length; j++) {
    sum += scores[i][j];
  }
  let avg = sum / scores[i].length;
  console.log(`Student ${i + 1} average:`, avg.toFixed(2));
}

// ------------------------------
// 8. Recap
// ------------------------------

// ✅ Arrays are ordered lists of values
// ✅ Use [index] to access items
// ✅ Use methods like push(), pop(), slice(), splice(), etc.
// ✅ Loop with for, forEach, or for...of
// ✅ 2D arrays store rows and columns — useful for seats, scores, maps

// ===================================
// End of Lecture 5
// ===================================
