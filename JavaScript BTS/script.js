// How JavaScript works behind the scenes?

// Everything in JavaScript happens inside an Execution context.

// -------lexical Environment-------

// function a() {
//   var b = 10;
//   c();
//   function c() {
//     console.log(b);
//   }
// }

// a();

//c function is lexicaly inside the a function

// --------------❗️Scopes❗️--------------
// var : Function scope
// let, const : block scope

// -------Block Scope-------
// if (true) {
//   console.log("true"); //block-scope
// }

// -------Global Scope-------

// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
// }

// console.log(a); //10
// console.log(b); //not defined
// console.log(c); //not defined

// let and const are block scoped that's why we can't use them outside the block scope.

// -------Function scope-------
// function a() {
//   var age = 23;
//   console.log(age);
// }
// a(); //23
// console.log(age); //age is not defined

// var is function scoped that's why we can use it outside of the function scope.

// --------------Temporal Dead Zone--------------

// The duration between variable declaration and initialization is called as tenporal dead zone.

//  ----------------------------------------------

// Tips :

// Give first priority to const.
// If you know that the value will not be changed in future then use const 👍.

// second priority to let.
// If you know that the value can  be changed in future then use let 👍.

// Avoid using var❗️.
