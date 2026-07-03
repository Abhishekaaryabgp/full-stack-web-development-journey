// objects prototypes examples
let arr = [2, 4, 6];
arr.YoBro = () => {
  console.log("You bro i am funtion :");
};
// lets crate proto __prototype__ => is reference
arr.__proto__.push = (n) => {
  console.log("pushing number :", n);
};

console.log(arr.push(78));
console.log(Array.prototype); // acutal prototype
console.log(String.prototype);
