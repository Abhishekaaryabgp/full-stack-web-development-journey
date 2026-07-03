const Calculator = {
  num: 33,
  add: function (x, y) {
    return x + y;
  },
  sub: function (x, y) {
    return x - y;
  },
  mul: function (x, y) {
    return x * y;
  },
  mod: function (x, y) {
    return x % y;
  },
};
console.log(Calculator.add(98899, 66564));
console.log(Calculator.sub(98899, 66564));
console.log(Calculator.mul(98899, 66564));
console.log(Calculator.mod(98899, 66564));


// object shorthand

const calc = {
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a + b;
  },
};
console.log(calc.add(44, 6));
