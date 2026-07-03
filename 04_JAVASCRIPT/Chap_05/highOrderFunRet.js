function oddEvenTest(request) {
  if (request == "odd") {
    return function (n) {
      console.log(!(n % 2 == 0));
    };
  } else if (request == "even") {
    return function (n) {
      console.log(n % 2 == 0);
    };
  } else {
    console.log("Wrong Request !");
  }
}
let request = "odd";
let check = oddEvenTest(request);
check(2);
check(5);
// depending on our request we can create our custom funtion 