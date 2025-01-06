const user = {
  username: "Shuvam",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, Welcome to the Website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();

// console.log(this);

// function one() {
//   let username = "shuvam";
//   console.log(this.username);
// }

// one();

const one = () => {
  let username = "Shuvam";
  console.log(this);
};
// one();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// const addTwo = (num1, num2) => num1 + num2; /* implicit return */

// const addTwo = (num1, num2) => {
//   num1 + num2;
// };

const addTwo = (num1, num2) => ({
  username: "shuvam",
});
console.log(addTwo(3, 3));

const myArr = [2, 3, 4, 5, 6, 7];

myArr.forEach(function () {});
myArr.forEach(() => {});
