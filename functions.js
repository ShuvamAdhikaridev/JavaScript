function sayMyName() {
  console.log("S");
  console.log("H");
  console.log("U");
  console.log("V");
  console.log("A");
  console.log("M");
}

// sayMyName();

// function addTwoNums(num1, num2) {
//   // paramteres
//   console.log(num1 + num2);
// }
function addTwoNums(num1, num2) {
  // paramteres
  //   let result = num1 + num2;
  //   console.log("shuvam");
  //   return result;
  return num1 + num2;
}
const result = addTwoNums(2, 5); // Argument

// console.log(result);

function loginUserMessage(username) {
  if (!username) {
    console.log(`Please enter a username`);
    return;
  }
  return `${username} just logged in.`;
}

// console.log(loginUserMessage("Shuvam"));
// console.log(loginUserMessage());

function calculateCartPrice(...num1) {
  return num1;
}
// console.log(calculateCartPrice(200, 400, 500));

const user = {
  username: "Shuvam",
  prices: 800,
};

function handleObject(anyobject) {
  console.log(
    `User name is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user);

handleObject({
  username: "Shuvam",
  price: 200,
});

const myArr = [200, 400, 100, 600];

function returnSecondValue(getarray) {
  return getarray[1];
}
console.log(returnSecondValue(myArr));
