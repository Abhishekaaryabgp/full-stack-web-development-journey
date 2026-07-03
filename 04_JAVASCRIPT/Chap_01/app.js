// Starting js
let FProductP = 100;
let FProductQ = 99;
// let SProductP = "The total price is : " + (FProductP + FProductQ) + " Rs."; Normaly
let SProductP = `The total price is : ${FProductP + FProductQ} Rs.`;
// template letarals `${}` is used to write the variable in the string without using + operator and also we can write the expression in it like ${FProductP + FProductQ}
console.log(SProductP);
