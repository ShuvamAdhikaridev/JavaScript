const name = "Shuvam";
const repoCount = 50;

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

const gameName = new String(`Shuvam-Ad`);

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(4));

console.log(gameName.indexOf(`a`));

const newString = gameName.substring(0, 5);
console.log(newString);

const anotherString = gameName.slice(-10, 3);
console.log(anotherString);
