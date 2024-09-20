// // 1. Templete literals

// function greet(name, age) {
//   return `Hello, my name is ${name} and i am ${age} years old`;
// }

// console.log(greet("Aman", 56));

// function generateParagraph() {
//   let name = "aman";
//   let age = "20";
//   let college = "Lcet";
//   return `Hello evereyone my name is ${name} and i am ${age} years old i completed my graduation from ${college}`;
// }

// console.log(generateParagraph());

// function calculateSum(a, b) {
//   let sum = a + b;
//   return `The sum of ${a} and ${b} is ${sum}`;
// }

// console.log(calculateSum(5, 12));






// // 2. Arrow functions


// const add = (a,b) => {
//     return(a+b)
// }


// console.log(add(5,9))


// SINGLE LINE ARROW FUNCTIONS //

// const square = x => x * x;

// console.log(square(5)); 


// arrow function with an implicit return // 

// const greet = (name) => (`hello ${name}`);
// console.log(greet('Aman')); 

// ARROW FUNCTIONS IN CALLBACK // 

// function filterEvenNumbers(arr) {
//     return arr.filter(num => num % 2 === 0);
// }

// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));



// Using a constructor function and regular function
// function Person(name) {
//     this.name = name;

//     this.printName = function() {
//         console.log(this.name); 
//     };
// }


// function Person1Arrow(name) {
//     this.name = name;

//     this.printName = () => {
//         console.log(this.name); 
//     };
// }

// let person1 = new Person("John");
// person1.printName();

// let person2 = new Person1Arrow("Jane");
// person2.printName(); 



// object shorthand // 


// const name = "Alice";
// const age = 25;

// const person = {
//   name, 
//   age   
// };
// console.log(name,age)


// const name = "bablu";
// const age = 25;

// const person = {
//   name, 
//   age   
// };
// console.log(`hi, i am ${name} and i am ${age} years old`)

// computed property names

// function createObject(key, value) {
//     return {
//         [key]: value
//     };
// }
// const obj = createObject('name', 'John');
// console.log(obj); 


// object shortand with destructing// 

// function mergeObject(object1, object2) {
//     return { ...object1, ...object2 };
//   }
  
//   const obj1 = { a: 1, b: 2 };
//   const obj2 = { b: 3, c: 4 };
  
//   const mergedObj = mergeObject(obj1, obj2);
//   console.log(obj1.a,); 
  

// advanced shortand usage//

// function updatePerson(oldPerson, newName) {
//     return {
//       ...oldPerson,
//       name: newName,
//     };
//   }
  
//   const person = { name: 'bablu', age: 30 };
//   const updatedPerson = updatePerson(person, 'Aman');
  
//   console.log(updatedPerson); 
  




//   DEFAULT PARAMETERS IN FUNCTIONS //


// function greet (name= "guest"){
   
//     return `Hello ${name}!` ;
// }

// console.log(greet());       
// console.log(greet("Aman")) ; 



// multiple default parameters//

// function calculateTotal(price, tax = 0.05) {
//     return price + (price * tax);
// }
// const totalWithDefaultTax = calculateTotal(100);
// console.log(`Total with default tax: $${totalWithDefaultTax.toFixed(2)}`);
// const totalWithCustomTax = calculateTotal(100, 0.08); // 8% tax
// console.log(`Total with custom tax: $${totalWithCustomTax.toFixed(2)}`);


// default parameters with undefined values // 

// function describePerson(name, age = 25) {
//     return `Name: ${name}, Age: ${age}`;
// }
// console.log(describePerson("Aman", 30)); 
// console.log(describePerson("Bablu"));        


// default parametres in complex expression // 


// function calculateDiscount(price, discount = price * 0.1) {
//     const finalPrice = price - discount;
//     return finalPrice;
// }

// console.log(calculateDiscount(100));          
// console.log(calculateDiscount(200));          
// console.log(calculateDiscount(150, 30));      
// console.log(calculateDiscount(50, 5));        
// console.log(calculateDiscount(300, 50));     



//  overriding with default parameters // 

// function createUser(username, role = "user") {
//     const user = {
//         username: username,
//         role: role
//     };
//     return user;
// }


// const user1 = createUser("Aman");
// const user2 = createUser("Bablu", "admin");

// console.log(user1); 
// console.log(user2); 




//  var Vs let vs const // 

// function testvar() {
//     if (true) {
//         var x = 'I am a var variable';
//         console.log('Inside block:', x); 
//     }
//     console.log('Outside block:', x); 
// }

// function testlet() {
//     if (true) {
//         let y = 'I am a let variable';
//         console.log('Inside block:', y); 
//     }
   
// }
// testvar();
// testlet();


// constant variables // 

// function createConstantArray() {
//     const constantArray = [1, 2, 3]; 

   
//     constantArray[0] = 10; 
//     console.log("After modification:", constantArray); 

   
//     try {
//         constantArray = [4, 5, 6]; 
//     } catch (error) {
//         console.error("Error:", error.message); 
//     }

//     console.log("Final array:", constantArray); 
// }

// createConstantArray();



// temporal deadzone // 

// function deadzone() {
//     console.log(Aman); 
//     console.log(bablu); 

//     let Aman = 'I am declared with let';
//     var bablu = 'I am declared with var';
// }

// deadzone();


//  redeclarion of a variables // 

// function redeclartion() {
    
//     console.log('Using var:');
//     var x = 1;
//     console.log(x); 
//     var x = 2; 
//     console.log(x); 

    
//     console.log('Using let:');
//     let y = 1;
//     console.log(y); 
//     y = 2; 
//     console.log(y); 


//     console.log('Using const:');
//     const z = 1;
//     console.log(z); 
    
    
//     console.log('Final values:', { x, y, z });
// }

// redeclartion();




//  block scope and loop // 


// function loopVar() {
//     for (var i = 0; i < 5; i++) {
        
//     }
//     console.log('Index with var:', i); // Logs: Index with var: 5
// }

// loopVar();


// function loopLet() {
//     for (let j = 0; j < 5; j++) {
      
//     }
    
// }

// loopLet();





//   rest and spread // 

// function sum(...numbers) {
//     return numbers.reduce((acc, curr) => acc + curr, 0);
// }


// console.log(sum(1, 2, 3, 4)); // Output: 10
// console.log(sum(5, 10, 15));  // Output: 30
// console.log(sum());           // Output: 0



// spread with arrays //

// function mergeArray(array1, array2) {
//     return [...array1, ...array2];
//   }
  

//   const arr1 = [1, 2, 3];
//   const arr2 = [4, 5, 6];
//   const mergedArray = mergeArray(arr1, arr2);
//   console.log(mergedArray);  
  

// spread with objects //


// function person(person, update) {
//     return {
//       ...person,
//       ...update
//     };
//   }
//   const originalPerson = {
//     name: 'Alice',
//     age: 30,
//     city: 'New York'
//   };
  
//   const updates = {
//     age: 31,
//     city: 'San Francisco'
//   };
  
//   const updatedPerson = person(originalPerson, updates);
//   console.log(updatedPerson);
 
    

//  rest with destruting // 

// function extractRest(arr) {
//     const [first, ...rest] = arr;
//     return { first, rest };
//   }
  
  
//   const array = [1, 2, 3, 4, 5];
//   const { first, rest } = extractRest(array);
  
//   console.log(first); 
//   console.log(rest);  



// spread in fucmction call // 

// function sum(...numbers) {
//     return numbers.reduce((acc, current) => acc + current, 0);
// }

// function caltotal(...args) {
//     return sum(...args);
// }

// console.log(caltotal(1, 2, 3, 4, 5)); 



///  DESTRUCTRING ARRAY AND OBJECTS // 

// function swap(a, b) {
//     [a, b] = [b, a];
//     return [a, b];
// }

// // Example usage:
// let a = 5;
// let b = 10;

// [a, b] = swap(a, b);
// console.log(a, b); 


//  object destructruing // 

// function displayPerson({ name, age }) {
//     console.log(`Name: ${name}, Age: ${age}`);
// }


// const person = { name: "John", age: 30, job: "Engineer" };
// displayPerson(person);


//  nested destructuring // 

// function extractNestedData(obj) {
   
//     const { 
//       user: { 
//         name, 
//         address: { 
//           city, 
//           zip 
//         } 
//       } 
//     } = obj;
  
//     return { name, city, zip };
//   }
//   const data = {
//     user: {
//       name: "John Doe",
//       age: 30,
//       address: {
//         city: "New York",
//         street: "123 Main St",
//         zip: "10001"
//       }
//     }
//   };
  
//   const result = extractNestedData(data);
//   console.log(result);

  


//  default values in destrucring // 


// function data({ x = 0, y = 0 } = {}) {
//     return { x, y };
// }

// console.log(data()); 
// console.log(data({})); 
// console.log(data({ x: 5 })); 
// console.log(data({ y: 10 })); 


//  rest in destructring // 

// function userInfo(user) {
//     const { name, ...rest } = user;
//     console.log('Name:', name);
//     console.log('Other Properties:', rest);
// }


// const user = {
//     name: 'Alice',
//     age: 30,
//     email: 'alice@example.com',
//     location: 'Wonderland'
// };

// userInfo(user);