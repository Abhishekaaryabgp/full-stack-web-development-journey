// Lexical scope is just like nested funtion
function OuterFun() {
  let x = 2;
  let y = 4;

  function InnerFun() {
    console.log(x);
  }
  InnerFun();
}
OuterFun();