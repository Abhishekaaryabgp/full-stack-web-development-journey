// rest is opposite to spread
function sum(...arg) {
  return arg.reduce((add, ele) => add + ele);
}

console.log(sum(2, 90, 5, 6));
