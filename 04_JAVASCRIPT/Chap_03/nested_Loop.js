//outer for loop
for (let i = 1; i <= 3; i++) {
  console.log(`\n ${i} ~ OuterLoop`);
  for (let j = 3; j >= 0; j--) {
    console.log("innerloop");
  }
}
