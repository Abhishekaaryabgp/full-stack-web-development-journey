let btn = document.querySelector("button");
console.dir(btn);
// btn.onclick = function () { // this one is external js
//   console.log("Button was clicked !");
// };
// we can create our own funtions
function MyName (){
    console.log("Hey Its Abhishek!");
}
btn.onmouseenter = function(){
    console.log("Its Hoverrring :");
}
btn.onclick = MyName; // we set vailue of onclick and pass funtion