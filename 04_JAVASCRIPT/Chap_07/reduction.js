let num = [2, 3, 4, 5, 8];
let result = num.reduce((exp, ele) => {
  console.log(exp);
  return exp + ele;
});
console.log(result);
