class WaterAnimal { // parent class
  constructor(name) {
    this.name = name;
    this.type = "aqua-mammal";
  }
  eat() {
    console.log("I am eating !");
  }
}
class whale extends WaterAnimal { //child class
  constructor(name) {
    super(name);
  }
  nature() {
    console.log("my size is 3 big volvo bus");
  }
}

class dolphine extends WaterAnimal { // child class
  constructor(name) {
    super(name);
  }
  nature() {
    console.log("I am called the dog of sea and also intelligent ");
  }
}

let whale1 = new whale("bigGuy");
console.log(whale1.nature());
