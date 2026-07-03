// check all numbers are multiple of 10 or not
let arr = [40, 40, 60, 70];
let check = arr.every((ele) => {
  return (ele % 10) == 0;
});
console.log(check);
//  we used .every funtion to check all