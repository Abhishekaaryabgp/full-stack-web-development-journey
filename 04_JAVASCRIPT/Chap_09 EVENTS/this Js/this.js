let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  console.dir(this.innerHTML);
  // we can manupulate the background color also
  this.style.backgroundColor = "red";
});

let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let h2 = document.querySelector("h2");

function ColorChangeEle() {
  console.log(this.innerText);
  this.style.backgroundColor = "green";
}
// to remove redundency we used this and didnt reapeat only from one function we usees multiple times
h1.addEventListener("click", ColorChangeEle);
p.addEventListener("click", ColorChangeEle);
h2.addEventListener("click", ColorChangeEle);
