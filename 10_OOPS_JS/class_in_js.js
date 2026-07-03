// class is just like blueprint we can create inside the objects
// for day to day coding we usually use class because this is best even better than new operator
class student {
  constructor(name, roll) {
    this.name = name;
    this.roll = roll;
  }
  talk() {
    console.log(
      `Hey this is ${this.name} nice to meet ya! \nThis is roll no:${this.roll}`,
    );
  }
}
let s1 = new student("Liya", 21);
let s2 = new student("Liya", 21);
console.log(s1.talk()===s2.talk()); // it will return true
// note we will use in day today life mostly we will use classed 