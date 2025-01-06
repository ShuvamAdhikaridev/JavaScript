//Immediately Invoked Function Expressions (IIFE)

(function one() {
  //named IIFE
  console.log(`DB connected`);
})();

(() => {
  console.log(`DB connected 2`);
})();

((name) => {
  //simple IIFE
  console.log(`DB connected 2 ${name}`);
})("Shuvam");
