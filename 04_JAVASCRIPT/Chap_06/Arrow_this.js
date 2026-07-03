// lets create the obj
const student = {
  name: "Abhi",
  marks: 70,
  prop: this, // global scope
  getName: function () {
    return this.name;
  },
  getMarks: () => {
    console.log(this); // parent scope for this mean parent scope
    return this.marks;
  },
  getInfo1() {
    setTimeout(() => {
      console.log(this); // student object
    }, 2000);
  },
  getInfo2: function () {
    setTimeout(function () {
      console.log(this); // window objects
    }, 2000);
  },
};

console.log(student.getInfo1());
