let arr = ["lion", "tiger", "elephant", "girafe", "hippo", "bear"];
arr.unshift("Hyna");
// for (let i = 0; i < arr.length; i++) {
//   console.log(i, arr[i]);
// }

// Below the reverse will print 
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(i, arr[i]);
}
