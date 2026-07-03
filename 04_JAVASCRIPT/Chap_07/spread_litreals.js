let arr = [3, 4, 5, 1, 7];
let newArr = [...arr];
newArr.push(78);
console.log(newArr);
let even = [2, 4, 6, 8];
let odd = [1, 3, 5, 7];
let bothEvenOdd = [...even, ...odd]; // this will add both array in new array
console.log(bothEvenOdd);
