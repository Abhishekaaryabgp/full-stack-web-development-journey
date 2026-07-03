// Grading system
console.log("Welcome to the grading system :\n");
let marks = 76;
if (marks >= 90 && marks < 100) {
  console.log("A++");
} else if (marks < 90 && marks >= 80) {
  console.log("A+");
} else if (marks < 80 && marks >= 70) {
  console.log("A");
} else if (marks < 70 && marks >= 60) {
  console.log("B");
} else if (marks < 60 && marks >= 50) {
  console.log("C");
} else if (marks < 50 && marks >= 40) {
  console.log("D");
} else if (marks < 40 && marks >= 33) {
  console.log("E");
} else if (marks < 33) {
  console.log("Sorry you are fail ! try again");
}
else if(marks > 100){
    console.log("Aaa no this is wrong your input is wrong!");
}
