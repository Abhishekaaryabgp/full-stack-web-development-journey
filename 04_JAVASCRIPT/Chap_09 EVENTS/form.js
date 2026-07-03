let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  //   let user = document.querySelector("#user");
  //   console.log("The username is :", user.value); // this .value will extract the current input in form

  //   let pass = document.querySelector("#pass");
  //   console.log("The password is :", pass.value);
  //   alert(`Hi ${user.value} your password is set to ${pass.value}`);

  // we cam track directly internal form elements
  console.dir(form); //this
  let user = this.elements[0];
  let pass = this.elements[1];
  console.log(user.value);
  console.log(pass.value);
});
