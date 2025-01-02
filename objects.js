//singleton

//Object.Create

//objeect literals

const mysym = Symbol("key1");

const JsUser = {
  name: "Shuvam",
  fullname: "Shuvam Adhikari",
  [mysym]: "mykey1",
  age: 21,
  address: "Kathmandu",
  email: "Shuvamlim234@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "friday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser.fullname);
// console.log(JsUser["fullname"]);

// console.log(typeof JsUser[mysym]);
// Object.freeze(JsUser);
JsUser.name = "Hello";
JsUser.email = "Lim345@gmail.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello Js User");
};

JsUser.greetingTwo = function () {
  console.log(`Hello Js user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
