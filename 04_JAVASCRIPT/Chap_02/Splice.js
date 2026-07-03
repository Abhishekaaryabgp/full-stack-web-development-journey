let str = ["abhi", "priyanka", "kahnah", "diya", "priya"];
console.log(str.splice(3)); //note splice changes in orignal array
console.log(str.splice(0, 1));
console.log(str);
console.log(str.splice(0, 1, "modi", "Damodar")); // we can give multiple parametre splice(0,1,"str1","str2");
console.log(str);
// using splice we can add or remove anywhere from array or from any index 
