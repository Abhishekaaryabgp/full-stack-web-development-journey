const Student = {
  name: "Abhi",
  class: "A",
  roll: "21",
  sub: ["math", "sci", "eng", "hin", "sans"],
  username: "Abhi",
  password: "0000",
};
let { username: user, password: secret, city = "LosAngelis" } = Student;
console.log(user);
