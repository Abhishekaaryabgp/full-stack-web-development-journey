let num = 7777;
let count = 0;
let copy = num;
while (copy > 0) {
  digit = copy % 10;
  count += digit;
  copy = Math.floor(copy / 10);
}
console.log(count); // after add all num it will show output 28 
