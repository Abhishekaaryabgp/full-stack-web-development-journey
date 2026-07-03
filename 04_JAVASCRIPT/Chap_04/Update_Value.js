const student = {
  name: "Abhishek",
  age: 25,
  city: "Bhagalpur",
  mobile: 9421213135,
};
console.log(student.mobile);
student.city = "Delhi";
console.log(student.city);
// We can assign or crate using . also
student.job = "Full stack Developer";
console.log(student.job);
console.log(student);
// Now to delete
// is will delete using delte then after object.key
console.log(delete student.mobile);
console.log(student);
