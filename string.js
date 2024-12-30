const name = "Shuvam";
const repoCount = 50;

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

const gameName = new String(`Shuvam-Ad-com-Hello-Ok`);

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(4));

// console.log(gameName.indexOf(`a`));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(0, 3);
console.log(anotherString);

const newStringOne = "  Shuvam   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "Https://Escobar.com/Escobar%7okok";

console.log(url.replace(`%7`, `-`));

console.log(url.includes(`okok`));
console.log(url.includes(`hello`));

console.log(gameName.split(`-`));
