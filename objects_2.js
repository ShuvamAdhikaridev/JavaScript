const tinderUser = new Object(); // Singleton

tinderUser.id = "123abc";
tinderUser.name = "Shuvam";
tinderUser.loggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "Yellow@gmail.com",
  fullName: {
    firstname: "shuvam",
    lastname: "Adhikari",
  },
};

// console.log(regularUser.fullName.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

const obj3 = { ...obj1, ...obj2 };

// console.log(obj1 === obj3);
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "User@gmail.com",
  },
];

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));

// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty(`name`));

/******************** Destructuring ***********************/

const course = {
  courseName: "JavaScript",
  price: 10000,
  courseInstructor: "Harris",
};

// course.courseInstructor

const { courseInstructor: sir } = course;

console.log(sir);

// const navbar = () => {};

// navbar((company = "Shuvam"));

// {
//     "name": "Shuvam",
//     "coursename": "Python",
//    " price": "free"
// }

// [{}, {}];
