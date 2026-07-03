// find max value using reduce funtion
let arr = [1, 3, 5, 67, 78, 4, 2, 44, 9];
let res = arr.reduce((max, ele) => {
  if (ele > max) {
      console.log(max);
      return ele;
  } else {
    return max;
  }
});
console.log(res);
