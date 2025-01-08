const myObject = {
  js: `JAvaScript`,
  cpp: `C++`,
  rb: `Ruby`,
  swift: `Swift by Apple`,
};

for (const key in myObject) {
  //   console.log(myObject[key]);
}

const programming = [`JS`, `CPP`, `Python`, `Ruby`, `Rust`];

for (const key in programming) {
  //   console.log(programming[key]);
}

const map = new Map();
map.set(`IN`, `India`);
map.set(`USA`, `United States of America`);

for (const key in map) {
  console.log(key);
}
