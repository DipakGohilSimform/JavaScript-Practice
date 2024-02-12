// const interface = "Audio"; //error : strict mode reserved word

// ------Functions------
// function logger() {
//   console.log("My name is Dipak");
// }
// logger();

// function aboutMe(name, age) {
//   console.log(`Name : ${name}\nAge: ${age}`);
// }

// aboutMe("Dipak", 23);

// const calc = function (birthYear) {
//   return 2037 - birthYear;
// };

// const tmp = calc(2000);
// console.log(tmp);

// function declaration supports hoisting
// function expression does not support hoisting

// ------arrow-function------
// const sum = (a, b) => console.log(a + b);
// sum(3, 2);

// ------functions calling other functions------

// const displayTitle = (title) => {
//   console.log(title);
// };

// const program = (about) => {
//   displayTitle(`JavaScript Function [example of ${about}]`);
// };

// program("functions calling other functions");

// ------------Arrays------------
// const friends = ["Michael", "Steven", "Peter"];

// console.log(friends);
// console.log(`Second element : ${friends[1]}`);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// friends[2] = "Jay";
// console.log(friends);

// console.log(friends.indexOf("Steven"));

// const firstName = "Dipak";
// const aboutMe = [firstName, "Gohil", friends];
// console.log(aboutMe);

// // add element at last index
// friends.push("john");
// console.log(friends);

// // remove last element
// friends.pop();
// console.log(friends);

// // add element at first index
// friends.unshift("Dean");
// console.log(friends);

// // remove first element
// friends.shift();
// console.log(friends);

// // includes
// const findFriend = friends.includes("Michael") ? true : false;

// console.log(findFriend);

// ------------Challenge------------

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// console.log(bills, tips);

// ------------Object------------
// const obj = {
//   firstName: "Dipak",
//   lastName: "Gohil",
//   age: 23,
//   hasDrivingLicense: true,
//   fullName: function () {
//     console.log(`${this.firstName} ${this.lastName}`);
//   },
//   getSummary: function () {
//     console.log(
//       `${this.firstName} is ${this.age} old, and he has ${
//         this.hasDrivingLicense ? "a" : "no"
//       } driver's license`
//     );
//   },
// };

// obj.fullName(); //Dipak Gohil
// obj.getSummary();

// console.log(`Name : ${obj.firstName} ${obj.lastName}`);
// console.log(`Age : ${obj.age}`);

// const interestedIn = prompt("Choose between firstName, lastName & age.");
// if (obj[interestedIn]) {
//   console.log(obj[interestedIn]);
// } else {
//   console.log("wrong request!");
// }

// ------------Challenge------------

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//   },
// };
// mark.calcBMI();
// john.calcBMI();

// console.log(mark.bmi, john.bmi);

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher then ${john.fullName}'s BMI (${john.bmi})`
//   );
// } else {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher then ${mark.fullName}'s BMI (${mark.bmi})`
//   );
// }

// ------------Iteration------------
// ---------------------------------
// ------------For-Loop-------------

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repitition ${rep} 🏋️‍♀️`);
// }

// const fruits = ["apple", "mango", "banana", "watermelon"];
// var box = [];

// for (let i = 0; i < fruits.length; i++) {
//   if (fruits[i] === "mango") {
//     continue; //current iteration will skip
//   }
//   console.log(fruits[i]);
// }

// for (let i = 0; i < fruits.length; i++) {
//   if (fruits[i] === "mango") {
//     break; //control will be out of the loop
//   }
//   console.log(fruits[i]);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weights repitition ${rep} 🏋️‍♀️`);
//   rep++;
// }
