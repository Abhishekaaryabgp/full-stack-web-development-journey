const figlet = require("figlet");
figlet("Abhishek Aarya", function (err, data) {
  if (err) {
    console.log("something wrong :");
    console.dir(err);
    return;
  }
  console.log(data);
});
