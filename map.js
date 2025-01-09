const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumbers.map((num) => {
//   if (num > 2) {
//     return num + 2;
//   }
//   return num;
// });

const newNums = myNumbers
  .map((num) => {
    return num * 10;
  })
  .map((num) => num + 1)
  .filter((num) => {
    return num > 50;
  });

console.log(newNums);
