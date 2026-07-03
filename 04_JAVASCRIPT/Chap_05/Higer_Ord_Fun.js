function Multiplegreet(fun, count) { // higer order funtion
  for (let i = 1; i <= count; i++) {
    fun();
  }
}

let greet = function()
{
  console.log("Hello");
}
Multiplegreet(greet, 5);
