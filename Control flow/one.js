// const temprature = 52;

// if (temprature < 50) {
//   console.log("Temprature is less than 50");
// } else {
//   console.log("Temprature is greater than 50");
// }

// const score = 200;

// if (score > 100) {
//   const power = "fly";
//   console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

//? Short Hand Notation

const balance = 1000;

// if (balance > 500) console.log("Test"), console.log(`Test2`);

// if (balance < 500) {
//   console.log(`Less than `);
// } else if (balance < 750) {
//   console.log(`Less than 750`);
// } else if (balance < 900) {
//   console.log(`Less than 900`);
// } else {
//   console.log(`Balannce is less than 1200`);
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFrommGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
  console.log(`User is allowed to Shop`);
}
if (loggedInFromEmail || loggedInFrommGoogle) {
  console.log(`User Logged In`);
}
