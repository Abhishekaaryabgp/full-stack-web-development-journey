// operators
let a = 20;
let b = 20;
// console.log("The sum of a and b is :", a + b);
// console.log("The substraction of a and b is :", a - b);
// console.log("The multiplication of a and b is :", a * b);
// console.log("The division of a and b is :", a / b);
// console.log("The modulus of a and b is :", a % b);
// The above are arithemetic operators
console.log("\n");
console.log("the unary operator is a++ :", a++); // post increment
console.log("the unary operator is ++a :", ++a); // pre increment
console.log("\n");
console.log("the unary operator is --a :", --a); // pre decrement
console.log("the unary operator is a-- :", a--); // post decrement
// The above are unary operators
console.log("\n");
// Assignment operators
let c = b;
c += a;
console.log("the assignment operator is c += a :", c);
// Comparrison operators
console.log("\n");
console.log("comarasion operator is a == b :", a == b); // it is true it works on boolean
//  logical operators
console.log("\n");
console.log(
  "logical operator is a && b : & This is logical OR a||b :",
  a && b,
  a || b,
);
