function PersonMaker(name, age) {
  const person = {
    name: name,
    age: age,
    PerTalk() {
      console.log(`Hey i am !${this.name}`);
    },
  };
  return person;
}
let p1 = PersonMaker("Abhi", 25); // disadvantage is it creates copies and this is not efficent way to use
console.log(p1);
