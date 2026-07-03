// inheritance concept
class Persons {
  // these Person is parent class and its properties  will be inherited below and used by child classes
  constructor(name, age) {
    console.log("Persons constructor is called!");
    this.name = name;
    this.age;
  }
  greetTalk() {
    console.log(`This is ${this.name}`);
  }
}
//  using extends we use parent class properties
class Student extends Persons {
  constructor(name, age, roll) {
    // this.name = name;
    // this.age = age; // now we can remove name and age because we already created in person class
    console.log("Student Child1 constructor is called!");
    super(name, age); //parent class being constructor is called
    this.roll = roll;
  }
  //   greetTalk() {
  //     console.log(`This is ${this.name}`); // we can also remove talk funtion because we already written in above class
  //   }
}

class Teacher extends Persons {
  constructor(name, age, sub) {
    console.log("Teacher Child2 constructor is called!");
    super(name, age); // super keywords uses parent constructor
    this.sub = sub;
  }
}
