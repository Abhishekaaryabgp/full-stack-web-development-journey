const arrAvg = (arr) => {
  let totalno = 0;
  for (let num of arr) {
    totalno += num;
  }
  return totalno / arr.length;
};
let arr = [2, 4, 5, 5, 3];
console.log(arrAvg(arr));
