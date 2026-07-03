let Name = ["Abhi", "Summi", "Priya"];
let marks = [75, 70, 88];
let mix = ["Abhi", 75, 99.9]; // note in js we can combine diffrent types of elements include string float integer etc not like other programing language which contain similar type ex java,c++

//  Note arrays are mutable
// Mutable means it can be change
// Lets update the avobe name priya with tina
Name[2] = "Tina"; // it updated without any creating new
console.log(Name);
Name[8] = "Jhaplu";
console.log(Name.length);