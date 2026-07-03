// constructor in java script note : constructor doesnt return anything ...
function person(name, age) {
  this.name = name;
  this.age = age;
}
person.prototype.Talk = function () {
  console.log(`Hi this is :${this.name} \nage is :${this.age}`);
};

// p1 & p2  is instance or object
let p1 = new person("Abhi", 25);
let p2 = new person("summi", 30);
console.log(p1);
console.log(p1.Talk());

console.log(p2);
console.log(p2.Talk());
//  this is better than factory funtion but there is more and best way to use its called classes
