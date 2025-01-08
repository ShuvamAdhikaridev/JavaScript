//? For loop

for (let i = 0; i < 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is the best number");
  }
  //   console.log(element);
}

for (let i = 1; i <= 10; i++) {
  //   console.log(`Outer loop: ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`inner loop: ${j} and outer loop: ${i}`);
    // console.log(i + `*` + j + `=` + i * j);
  }
}

let myArray = ["Flash", "Batman", "Superman"];

for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  //   console.log(element);
}

//? break and continue

// for (let i = 0; i <= 20; i++) {
//   if (i === 5) {
//     console.log(`Detected 5`);
//     break;
//   }
//   console.log(`valuee of i is: ${i}`);
// }

for (let i = 0; i <= 20; i++) {
  if (i === 5) {
    // console.log(`Detected 5`);
    continue;
  }
  //   console.log(`valuee of i is: ${i}`);
}

for (let i = `*`; i < 8; i++) {
  const element = i;
  console.log(element);
}
