// Filter out even
let n = [1, 2, 3, 4, 8, 5, 6, 7];
let even = n.filter((el) => {
  return el % 2 == 0;
});

let odd = n.filter((el) => {
  return el % 2 != 0;
});
console.log(even);
console.log(odd);
