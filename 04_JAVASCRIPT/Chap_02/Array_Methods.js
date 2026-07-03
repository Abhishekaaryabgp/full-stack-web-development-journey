// Array uses
/* Push ,pop ,shift, unshift   note js Array is dynamic it does not have LIFO*/
let Name = ["Abhi", "jia"];
Name.push("Tiya"); // it will add Tiya at last push always in last
console.log(Name);

Name.pop(); // it will remove tiya from the last under pop() we dont need to pass the parameter
console.log(Name);

Name.shift(); // delete from front or start
console.log(Name);

Name.unshift("kriti");
console.log(Name); // add from start