//? For of

//? Array specific loop

const arr = [1, 2, 3, 4, 5];

for (const val of arr) {
  //   console.log(val);
}

const greetings = "Hello World";

for (const greet of greetings) {
  //   console.log(`Each character of ${greet}`);
}

//? Maps => Unique Values

const map = new Map();
map.set(`IN`, `India`);
map.set(`USA`, `United States of America`);

// console.log(map);
//
for (const [key, Value] of map) {
  console.log(key);
}

const myObj = {
  game1: `NFS`,
  game2: `SpiderMan`,
};

for (const [key, value] of myObj) {
  console.log(key);
}
