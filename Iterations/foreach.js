const coding = ["js", "Ruby", "JAva", "Python", "C++"];

// coding.forEach(function (item) {
//   console.log(item);
// });

// coding.forEach((item) => {
//   console.log(item);
// });

function printme(item) {
  console.log(item);
}

// coding.forEach(printme);

// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const myCoding = [
  {
    languageName: "JavaScript",
    languageFileName: "JS",
  },
  {
    languageName: "JAVA",
    languageFileName: "JAVA",
  },
  {
    languageName: "React",
    languageFileName: "Jsx",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
