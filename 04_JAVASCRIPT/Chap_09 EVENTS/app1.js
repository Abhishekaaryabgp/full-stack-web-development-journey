let btns = document.querySelectorAll("button");
for (btn of btns) {
  //   btn.addEventListener("click", sayHello);
//   btn.addEventListener("dblclick", sayNames);
  btn.addEventListener("click", function Abhi() {
    alert("Its your Boy Abhishek Aarya");
  });
}
function sayHello() {
  // callback
  alert("Hello Buddy");
}
function sayNames() {
  alert("Whatsapp");
}
