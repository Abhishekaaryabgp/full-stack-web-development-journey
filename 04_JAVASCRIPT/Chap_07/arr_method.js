// For each funtion
let arr = [2, 43, 6];
function Element(el) {
  console.log(el);
}
arr.forEach(Element);
//  or we can directly
arr.forEach(function (el) {
  console.log(el);
});
