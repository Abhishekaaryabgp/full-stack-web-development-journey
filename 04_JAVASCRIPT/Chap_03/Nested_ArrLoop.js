let Heroes = [
  ["Krrish", "Fling Jatt", "Minnal murli"],
  ["superman", "spiderman", "Wonder-Woman"],
];
// outer loop for index
for (let i = 0; i < Heroes.length; i++) {
  console.log("\n", i, Heroes[i], Heroes[i].length);

  //   inner loop
  for (let j = 0; j < Heroes[i].length; j++) {
    console.log(`j = ${j}, ${Heroes[i][j]}`);
  }
}
