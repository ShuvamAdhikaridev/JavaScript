// while (2 == 2) {
//   console.log("Hello");
// }

let index = 0;

// while (index <= 10) {
//   console.log(`Value of index is ${index}`);
//   index = index + 2;
// }

let myArray = [`Flash`, `Batman`, `Superman`];
let arr = 0;
while (arr < myArray.length) {
  console.log(`Value is ${myArray[arr]}`);
  arr++;
}

//? Do while

let score = 1;
do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10);
