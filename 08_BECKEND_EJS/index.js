// THIS INDEX.JS IS OUR BECKEND SERVER
//  lets require the express
const express = require("express");
const path = require("path");
const app = express();

// creating port
const port = 8080;

// using ejs
app.set("view engine", "ejs");
//to ensure the view folder always used we will
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  // note in express we dont have to set directory by default teh express will find in view folder if we dotn use .ejs thats okay
  res.render("home.ejs");
});

app.get("/hello", (req, res) => {
  res.send("Hello abhishek");
});

// passing data to ejs
app.get("/rolldice", (req, res) => {
  let Dice_value = Math.floor(Math.random() * 6) + 1;
  res.render("dice.ejs", { Dice_value }); // we can use similar key and variable in ejs thats okay Dice_value
});

/*  A littile Activity access username */
// app.get("/ig/:username",(req,res)=>{
//   let {username} = req.params;
//   const followers =["jhaplu ","oggy","Khiladi"];
//   res.render("ins.ejs",{username,followers});
// })
// Getting data from data,json as a database ang usin g
app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  const InstaData = require("./data.json"); // data.json is beckend
  const data = InstaData[username];
  if(data){
    res.render("instagram.ejs", { data });

  }else{
    res.render("error.ejs");
  }
  // console.log(data);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
