let sum = 22; // global scope can be usable anywher but if inside function that perticular thing is not avail only in that case
function CalculateSum(x, y) {
  let sum = x + y;
  console.log(sum); // function scope (and function scope has more specific as global scope)
}
CalculateSum(3, 4);
