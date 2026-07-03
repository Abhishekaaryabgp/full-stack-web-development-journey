const max = prompt("Enter Maximum number !");
const random = Math.floor(Math.random() * max) + 1;
console.log(random);
let guess = prompt("Enter your number to guess!");
while (true) {
  if (guess == "exit") {
    console.log("you quited !");
    break;
  }
  if (parseInt(guess) == random) {
    console.log("You guessed ! your random number is :", random);
    break;
  } else if (guess < random) {
    guess = prompt("Hint : You guess small number try larger number !");
  } else if (guess > random) {
    guess = prompt("Hint : You guess larger number try smaller number !");
  } else {
    guess = prompt("Your guess is wrong try again! or type exit to quit !");
  }
}
