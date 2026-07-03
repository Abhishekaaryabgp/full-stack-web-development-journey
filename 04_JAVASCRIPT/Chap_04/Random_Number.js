let Random = Math.random(); // it wil generate rantom number except 1
Random = Random * 100; // it will multiply that random with range times
Random = Math.floor(Random); // floor will remove the other part and let show the positive integer
Random = Random + 1;
console.log(Random); // and here it will print random value
// you can do within one line

console.log(Math.floor(Math.random() * 10) + 1);
