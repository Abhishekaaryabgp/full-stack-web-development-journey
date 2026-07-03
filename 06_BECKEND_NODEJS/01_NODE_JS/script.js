// We run this file with the help of node
// let n = 1;
// for (let i = 0; i < 7; i++) {
//   console.log(`Hey Node Good Morning :${i}`);
// }
// let argv = process.argv;
// for (let i = 0; i < argv.length; i++) {
//   console.log("Hello ", argv[i]);
// }
// Exporting module.js
const ans = require("./math.js");
// require will get the funtion from math.js
console.log("The addion is :", ans.add(2, 4));
console.log("The subtraction is :", ans.sub(2, 4));
console.log("The multiplication is :", ans.mul(2, 4));
console.log("The Value of PI :", ans.PI);
