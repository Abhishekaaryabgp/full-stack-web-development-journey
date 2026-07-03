function hello() {
  console.log("inside hello funtions"); //<- demonstrate funtion will fisecond run this (last in first out)
  console.log("Hello");
}
function demonstrate() {
  console.log("calling hello funtions"); //<- demonstrate funtion will first run this (last in first out)
  hello();
}
console.log("calling hello funtion :"); // <- first will run (last in first out)
demonstrate(); // then second this demonstrate funtion will run : and it will execute the avobe funtins
console.log("bye!"); // in the last

// Beautiful Program :

function one() {
  return 1;
}
function two() {
  return one() + one();
}
function three() {
  let ans = two() + one();
  console.log(ans);
}
three();
