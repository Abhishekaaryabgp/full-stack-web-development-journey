// find min value using reduce funtion
let arr = [0, 3, 5, 67, 78, 4, 2, 44, 9];
let res = arr.reduce((min, ele) => {
  if (ele < min) {
      console.log(min);
      return ele;
  } else {
    return min;
  }
});
console.log(res);
