const marvel_heros = ["thor", "Ironman", "Spiderman"];
const dc_heros = ["Superman", "Flash", "Batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);

// const heros = marvel_heros.concat(dc_heros);
// console.log(heros);

const all_heros = [...marvel_heros, ...dc_heros];

// console.log(all_heros);

const new_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// const another_array = new_array.flat(Infinity);
// console.log(another_array);

console.log(Array.isArray("Shuvam"));
console.log(Array.from("Shuvam"));
console.log(Array.from({ name: "shuvam" })); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
