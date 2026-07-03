// Q1 .......
let input = document.createElement("input");
let button = document.createElement("button");
button.innerText = "Click me ";
document.querySelector("body").append(button);
document.querySelector("body").append(input);
// Q2........
// changing input as placeholder
button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");
// Q3........
document.querySelector("body").append(button);
button.classList.add("blue");

// Q4........
let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";
document.querySelector("body").append(h1);
h1.classList.add("Prac-h1");

// Q5........
let paragraph = document.createElement("p");
paragraph.innerHTML =
  "अङ्गेन गात्रं नयनेन वक्त्रं न्यायेन राज्यं <b>लवणेन</b> भोज्यं।";
document.querySelector("body").append(paragraph);
