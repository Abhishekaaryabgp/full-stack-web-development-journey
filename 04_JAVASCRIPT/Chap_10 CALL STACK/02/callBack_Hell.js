// let h1 = document.querySelector("h1");
// // we can create funtions
// function ColorChange(color, delay, nextColorChange) {
//   setTimeout(() => {
//     h1.style.color = color;
//     nextColorChange();
//   }, delay);
// }
// // below we are doing nesting of callbacks
// ColorChange("red", 1000, () => {
//   ColorChange("yellow", 1000, () => {
//     ColorChange("cyan", 1000);
//   });
// });
// //  the above code is called call back hell problem well it is small so this is not problem but on working large code then it will be a problem
function DataBase(data, success, failure) {
  let InternetSpeed = Math.floor(Math.random() * 10) + 1;
  if (InternetSpeed > 5) {
    console.log(`Your Interspeed is ${InternetSpeed} Mbps`);
    success();
  } else {
    console.log(`Your Interspeed is ${InternetSpeed} Mbps`);
    failure();
  }
}

DataBase(
  "Hello Guys",
  () => {
    console.log("Success 1: First data saved.");

    // Second Call (Nested)
    DataBase(
      "Abhi",
      // Argument 2: Success callback for "Abhi"
      () => {
        console.log("Success 2: Second data saved.");
      },
      // Argument 3: Failure callback for "Abhi"
      () => {
        console.log("Failure 2: Second data saving failed.");
      },
    );
  },
  // Argument 3: Failure callback for "Hello Guys"
  () => {
    console.log("Sorry User, your Internet speed is too slow to save!");
  },
);

//  Now look the avobe code it will confuse most developer thats why we are gonna use promise to solve the nested callback issues
// the avobe code is called callBack Hell codes
