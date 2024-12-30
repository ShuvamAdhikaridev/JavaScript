// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 21);
// let myCreatedDate = new Date(2024, 0, 21, 5, 3);
// let datee = new Date(`2024-01-14`);
let myCreatedDate = new Date("01-14-2024");
// console.log(myCreatedDate.toLocaleString());
// console.log(datee.toLocaleString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());

newDate.toLocaleString(`default`, {
  weekday: `long`,
});
