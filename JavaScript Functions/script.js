// ----------Anonymous Functions----------

// Anonymous functions are used when we want to use a function as a value.

// function(){
//     // function body
// }

// ----------function Statements----------

// function statements can be hoisted.

// function a() {
//   console.log("Hello");
// }

// ----------function Expression----------

// here we are giving an anonymous function a "var a" as a value.

// var a = function () {
//   console.log("Hello");
// };

// ----------High Order Functions----------

// functions that takes a callback function that are called as high order functions.

// function b() {
//   console.log("B");
// }
// setTimeout(() => {
//   var a = 5;
//   console.log(`after ${a} seconds`);
// }, 5000);
// console.log("Hii");
// b();
