// let btn = document.querySelector("button");
// btn.addEventListener("click", function (Event) {
//   console.log(Event);
//   console.log("Button clicked");
// });

// btn.addEventListener("dblclick", function (Event) {
//   console.log(Event);
//   console.log("Button clicked");
// });

// Below Keydown
let inp = document.querySelector("input");
inp.addEventListener("keydown", function (event) {
  console.log(event);
  console.log(event.key); // it ill show key
  console.log(event.code); // it rturns keys code
  console.log("key was pressed");
});

// let inp = document.querySelector("input");
// inp.addEventListener("keyup", function () {
//   console.log("key was released");
// });
