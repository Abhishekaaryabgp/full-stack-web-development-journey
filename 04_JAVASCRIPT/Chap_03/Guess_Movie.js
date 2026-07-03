const favmovie = "avatar";
let guess = prompt("Guess your movie!");

while (guess != favmovie && guess != "quit") {
  guess = prompt("Please Try again");
}

if (favmovie == guess) {
  console.log("Congrats");
} else {
  console.log("you quited!");
}
