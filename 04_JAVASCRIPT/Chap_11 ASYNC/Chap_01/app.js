// async function greet() {
//   // async mean always return promise
//   //   throw "just error is throwing"; // using throw we can throw error
//   return "Ill protect you always !";
// }
// // we can add then on the return promise
// greet()
//   .then((result) => {
//     console.log("Promise is fullfiled my boy");
//     console.log("Promise was ", result);
//   })
//   .catch((err) => {
//     console.log("Promise was rejected with error!", err);
//   });

// //   asyn on arrow funtion
// let demo = async () => {
//   return "404 error";
// };
// console.log(demo());
// function RandNum() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let math = Math.floor(Math.random() * 10 + 1);
//       console.log(math);
//       resolve();
//     }, 1000);
//   });
// }
// async function Awaits() {
//   await RandNum(); // await will wait or pause for some times it will execute one bye one
//   await RandNum();
//   await RandNum();
// }

// color change funtion
let h1 = document.querySelector("h1");
function ColorChange(color, delay) {
  return new Promise((resolve, reject) => {
    // creating reject it will reject
    let num = Math.floor(Math.random() * 5) + 1;
    if (num > 3) {
      reject("This promise is rejected!");
    }
    setTimeout(() => {
      h1.style.color = color;
      console.log(`color changed to ${color}`);
      resolve(color);
    }, delay);
  });
}
async function demo() {
  // using try catch we can handlw reject
  try {
    await ColorChange("green", 1000);
    await ColorChange("red", 1000);
    await ColorChange("blue", 1000);
  } catch (err) {
    console.log("Caught error");
    console.log(err);
  }
  // note if promise rejected then below the part will not executed so to execute that we need
  let a = 3;
  let b = 4;
  console.log("addition : ", a + b);
}
