// let oldimg = document.getElementsByClassName("oldImg");
// for (let i = 0; i < oldimg.length; i++) {
//   console.dir(oldimg[i].src); // obiously it will run on repl mean chrome or any console
// }
// Query Selector
// console.dir(document.querySelector("h1")); // it will select single element
// console.dir(document.querySelector("#description")); // we can selct id also
// console.dir(document.querySelector("div h4")); // just like nested div ,h4 it will select

// //  suppose if we want to select all then we will use
// console.log(document.querySelectorAll("p"));

// suppose we want to change color of anchor tags using style manipulation
// let links = document.querySelectorAll(".box a");
// for (let i = 0; i < links.length; i++) {
//   links[i].style.color = "green"; // it will change the color of anchor tag
// }
// below the loop is same
// for (link of links) {
//   link.style.color = "yellow"; // it will change the color of anchor tag
// }

// lets select body then after modify using append
// let body = document.querySelector("body");
// body.appendChild(newP);

// Practice
// creating elements
let para = document.createElement("p");
para.innerText = "Hello i am red !"; // innertext will be print on red
document.querySelector("body").append(para);
para.classList.add("red");

let heading = document.createElement("h3");
heading.innerText = "Hey i am blue text";
document.querySelector("body").append(heading);
heading.classList.add("blue");

// div with black border
let div = document.createElement("div");
let h1 = document.createElement("h1");
let para1 = document.createElement("p");

h1.innerText = "Hello Guys i am alien";
para1.innerText = "How are you?";

div.append(h1);
div.append(para1);
div.classList.add("PracDiv");
document.querySelector("body").prepend(div);
