let greet = "Hello"; //Global Scope
function OuterGreet() {
  let greet = "Namaste Bharat !"; //Function scope
  console.log(greet);
  function InnerGreet() {
    console.log(greet); //Lexical Scope
  }
  InnerGreet();
}
console.log(greet);
OuterGreet();
