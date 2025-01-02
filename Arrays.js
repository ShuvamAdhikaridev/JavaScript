// /* Array */

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["SuperMan, Spiderman", "Batman"];

const myArr2 = new Array(1, 2, 3, 4);

// console.log(myArray[0]);

// Array methods

// myArray.push(6);
// myArray.push(7);
// myArray.pop();
// console.log(myArray);

// myArray.unshift(7);
// myArray.shift();

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(7));
// console.log(myArray.indexOf(4));

// const newArr = myArray.join();
// console.log(myArray);
// console.log(newArr);

//slice, splice

console.log("A", myArr);
const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C", myArr);
console.log(myn2);
