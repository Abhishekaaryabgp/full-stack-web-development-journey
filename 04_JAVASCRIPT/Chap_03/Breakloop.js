for (let i = 1; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
}
console.log("We uses break at 3\n");

let j = 1;
while (j <= 5) {
  if (j == 4) {
    break;
  }
  console.log(j);
  j++;
}
console.log("We uses break at 4");
