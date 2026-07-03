const student = {
  name: "Abhi",
  age: 25,
  Eng: 59, // suppose that i want to access total marks from funtions
  math: 53,
  science: 67,
  roll: 21,
  average() {
    let avg = (this.Eng + this.math + this.science) / 3; //eng+math+science/3 will give error
    console.log(avg);
  },
};
student.average();
