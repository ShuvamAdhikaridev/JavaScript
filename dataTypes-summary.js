// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

// const score = 100;
// const scoreValue = 100.3;

// const isLoggedIn = false;
// const outsideTemprature = null;
// let userEmail;

// const id = Symbol(`123`);
// const anotherId = Symbol(`123`);

// console.log(id === anotherId);

// const bigNumber = 345454348438383345454n;

//   Reference [Non Primitive]

// Array, Objects, Functions

// const heros = ["Spiderman", "Batman"];
// let myObj = {
//   name: "Shvuam",
//   age: 11,
// };

// const myFunction = function () {
//   console.log("Hello World");
// };

// console.log(typeof outsideTemprature);

/* Stack & Heap */

// Stack => Primitive Heap => Non Primitive

// let myYoutubeNAme = "Shuvam";

// let anotherName = myYoutubeNAme;

// anotherName = "HowToCode";

// console.log(anotherName);
// console.log(myYoutubeNAme);

let userOne = {
  email: "shuvamlim234@gmail.com",
  esewa: 9742826821,
};

let userTwo = userOne;

userTwo.email = "Hello@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
