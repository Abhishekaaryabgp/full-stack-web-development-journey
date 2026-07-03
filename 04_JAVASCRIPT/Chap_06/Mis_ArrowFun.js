// Misslanious topics
// 1. Arrow funtions
const sum = (a, b) => {
  return a + b;
};
console.log(sum(3, 5));
//  some more practice
// find area
const area = (l, b) => {
  return l * b;
};
console.log(`area of Req = ${area(4, 5)}`);
// some more practice
// check prime no

const IsPrime = (num) => {
  if (num < 2) {
    return false;
  }
  let IsPrime = true;
  for (i = 2; i < num; i++) {
    if (num % i == 0) {
      IsPrime = false;
    }
    return IsPrime;
  }
};
console.log(IsPrime(11));
