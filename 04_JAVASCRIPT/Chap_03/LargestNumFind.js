let arr = [2, 4, 988, 88]; //988 is largest so it will print 988
num = 0;
for (let i = 0; i < arr.length; i++) {
  if (num < arr[i]) {
    num = arr[i];
  }
}
console.log(`The largest number is = ${num} :`);
