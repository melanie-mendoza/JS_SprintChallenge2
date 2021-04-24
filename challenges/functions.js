// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/
function consume(a, b, cb) {
  return cb(a, b);
}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(num1, num2) {
  return num1 + num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function greeting(first_name, last_name) {
  return `Hello ${first_name} ${last_name}, nice to meet you!`
}



/* Step 3: Check your work by un-commenting the following calls to consume(): */
// console.log(consume(2, 2, add)); // 4
// console.log(consume(10, 16, multiply)); // 160
// console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedFunction() can access the variable internal.

// In JS, you can define a function inside another one. 
// This means that nestedFunction() is a local variable to myFunc(). 
// nestedFunction() and myFunc() are, therefore, in an enclosed environment with each other, which we call a closure.
// A closure is a function being enclosed in another function, the enclosure creating an environment with which all data
// associated within the environment are maintained.  In JS, all functions form closures.
// Closures are the foundation of promises in JS and make it possible to handle asynchronous API calls.   


const external = "I'm outside the function";

function myFunction() {
   //console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();



// References: https://www.youtube.com/watch?v=-jysK0nlz7A
