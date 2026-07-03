// Objects of objects
Class_StudentsInfo = {
  Student1: {
    name: "Abhishek",
    city: "bgp",
  },
  Student2: {
    name: "Priya",
    city: "Delhi",
  },
  Student3: {
    name: "Tina",
    city: "Mumbai",
  },
};

console.log(Class_StudentsInfo.Student1.name);
Class_StudentsInfo.Student1.city = "Delhi";
console.log(Class_StudentsInfo);
