// on mouse out
// let heading = document.querySelector("h1");

// heading.addEventListener("mouseout", function () {
//   console.log("Hello Mouse event :");
// });

// On key press
// let input = document.querySelector("input");

// input.addEventListener("keypress", function (event) {
//   console.log("Hello Mouse event :");
// });

// on scroll
// const element = document.querySelector("div#scroll-box");
// const output = document.querySelector("p#output");

// element.addEventListener("scroll", (event) => {
//   output.textContent = "Scroll event fired!";
//   setTimeout(() => {
//   using arrow funtion
//     output.textContent = "Waiting on scroll events...";
//   }, 1000);
// });

let input = document.querySelector("input");

input.addEventListener("load", function (event) {
  console.log("Hello Mouse event :");
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM is ready, but images/styles may still be loading.");
});

window.addEventListener("load", () => {
  console.log("Everything is loaded, including images and CSS.");
});
