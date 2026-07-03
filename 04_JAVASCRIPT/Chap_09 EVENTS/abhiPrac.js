let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  let h1 = document.querySelector("h1");
  let div = document.querySelector("div");

  let RanColor = RaaandColor();
  h1.innerText = RanColor;

  div.style.backgroundColor = RanColor;
  console.log("color updated to " + RanColor);
});

function RaaandColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let color = `rgb(${red},${green},${blue})`;
  return color;
}
