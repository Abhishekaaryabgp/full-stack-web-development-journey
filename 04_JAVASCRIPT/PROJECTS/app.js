console.log("Basic Todo App");
let todo = [];
let req = prompt("Enter your choicee!");

console.log(todo);
while (true) {
  if (req == "quit") {
    console.log("You Quit!");
    break;
  }
  if (req == "list") {
    console.log("----------------------");
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    }
    console.log("----------------------");


  } else if (req == "add") {
    let task = prompt("Please Add your task!");
    todo.push(task);
    console.log("Task Added !");


  } else if (req == "delete") {
    let index = prompt("please enter the task index");
    todo.splice(index, 1);
    console.log("Task Deleted!");
  } else{
    console.log("You entered wrong!")
  }
  req = prompt("Enter your choice!");
}
