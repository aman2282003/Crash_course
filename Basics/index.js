// 1. Type conversion

let val = "52";
let ans = 52;
function convertToNumber(val) {
  return Number(val);
}

function convertToString(val) {
  return String(val);
}

function convertAndCompare(a, b) {
  let aa = String(a);
  let bb = String(b);
  return aa === bb;
}

console.log(convertToNumber(val));
console.log(convertToString(val));
console.log(convertAndCompare(val, ans));

// 2. Type Coercion

function checkCoercion(a, b) {
  console.log(a == b);
  console.log(a === b);
}
// Example usage
checkCoercion("5", 5); // true, false
checkCoercion(false, 0); // true, false

function coerceInArithmetic(a, b) {
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(a / b);
}
// Example usage
coerceInArithmetic("10", 5);
coerceInArithmetic(true, 3);

function coerceInConditionals(value) {
  if (value) {
    console.log(`${value} is truthy`);
  } else {
    console.log(`${value} is falsy`);
  }
}
// Example usage
coerceInConditionals(0); // falsy
coerceInConditionals("hello"); // truthy

// 3 Type identification

function identifyType(value) {
  console.log(typeof value);
}

identifyType(42);
identifyType("Hello");
identifyType(true);
identifyType([1, 2, 3]); // "object" (arrays are objects in JavaScript)
identifyType({ name: "A" });
identifyType(function () {});

function isArrayOrObject(value) {
  if (Array.isArray(value)) {
    return "Array";
  } else if (typeof value === "object") {
    return "Object";
  } else {
    return "Neither Array nor Object";
  }
}

console.log(isArrayOrObject([1, 2, 3]));
console.log(isArrayOrObject({ a: 1 }));
console.log(isArrayOrObject(42));

function identifyComplexType(values) {
  return values.map((value) => {
    if (Array.isArray(value)) {
      return "Array";
    } else if (value instanceof Date) {
      return "Date";
    } else {
      return typeof value;
    }
  });
}

// Test the function
const mixedData = [42, "Hello", true, [1, 2, 3], { a: 1 }, new Date()];
console.log(identifyComplexType(mixedData));

// 4. Statements vs expressions

// Statement example: for loop (doesn't return a value)
for (let i = 0; i < 5; i++) {
  console.log(i); // statement within the for loop
}

// Expression example: a simple addition (returns a value)
const sum = 2 + 2;
console.log(sum); // 4

function expressionInFunction(a, b) {
  return a + b; // This is an expression that returns the result
}

// Using the function in a statement (if condition)
if (expressionInFunction(2, 3) > 4) {
  console.log("The result is greater than 4");
} else {
  console.log("The result is less than or equal to 4");
}

function complexExpression(a, b, c) {
  if (a + b > c * b) {
    return "a + b is greater than c * b";
  } else {
    return "a + b is not greater than c * b";
  }
}

// Test the function
console.log(complexExpression(5, 2, 3));
console.log(complexExpression(7, 3, 2));

// For loop

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

function printArrayElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// Test the function
printArrayElements(["apple", "banana", "cherry"]);

function createMultiplicationTable(n) {
  let table = [];
  for (let i = 1; i <= n; i++) {
    let row = [];
    for (let j = 1; j <= n; j++) {
      row.push(i * j);
    }
    table.push(row);
  }
  return table;
}

// Test the function
console.log(createMultiplicationTable(3));

// Switch case

function getDayOfWeek(dayNumber) {
  switch (dayNumber) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Invalid day";
  }
}

// Test the function
console.log(getDayOfWeek(1)); // "Monday"
console.log(getDayOfWeek(4)); // "Thursday"
console.log(getDayOfWeek(7)); // "Sunday"

function getDayOfWeek(dayNumber) {
  switch (dayNumber) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
    case 7:
      return "Weekend";
    default:
      return "Invalid day";
  }
}

// Test the function
console.log(getDayOfWeek(6)); // "Weekend"
console.log(getDayOfWeek(7)); // "Weekend"

function classifyAnimal(animal) {
  switch (animal) {
    case "dog":
    case "cat":
    case "whale":
      return "Mammal";
    case "sparrow":
    case "eagle":
      return "Bird";
    case "snake":
    case "lizard":
      return "Reptile";
    case "shark":
    case "salmon":
      return "Fish";
    default:
      return "Unknown";
  }
}

// Test the function
console.log(classifyAnimal("dog"));
console.log(classifyAnimal("eagle"));
console.log(classifyAnimal("shark"));
console.log(classifyAnimal("frog"));

// While loop

let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

function countDownFrom(n) {
  while (n >= 0) {
    console.log(n);
    n--;
  }
}

// Test the function
countDownFrom(5);

function findFirstEven(numbers) {
  let i = 0;
  while (i < numbers.length) {
    if (numbers[i] % 2 === 0) {
      return numbers[i];
    }
    i++;
  }
}

// Test the function
console.log(findFirstEven([1, 3, 5, 8, 10])); // Output: 8

// Do while loop

let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);

// This differs from a `while` loop because it executes the code block once before checking the condition.

function validatePassword() {
  let password;
  do {
    password = prompt("Enter a password (must be longer than 6 characters):");
  } while (password.length <= 6);

  console.log("Password accepted");
}

// Call the function in a browser environment to prompt the user for a password.



function guessNumber() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  let guess;
  let attempts = 0;

  do {
    guess = parseInt(prompt("Guess a number between 1 and 10:"));
    attempts++;
  } while (guess !== randomNumber);

  console.log(`You guessed the correct number in ${attempts} attempt(s)!`);
}

// Call this function in a browser environment for an interactive guessing game.



