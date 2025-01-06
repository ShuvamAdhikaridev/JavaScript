// var c = 300;
let a = 300;

if (true) {
  // console.log(100);
} else {
  console.log(300);
}
// console.log(a);
// console.log(b);
// console.log(a);

function one() {
  const username = "Shuvam";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);
  // two();
}
one();

if (true) {
  const username = "Shuvam";
  if (username === "Shuvam") {
    const website = " Youtube";
    // console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);

// ++++++++++++++ interesting ++++++++++++++++//
// console.log(addone(5));
function addone(num) {
  return num + 1;
}

// console.log(addtwo(5));
const addtwo = function (num) {
  return num + 2;
};
