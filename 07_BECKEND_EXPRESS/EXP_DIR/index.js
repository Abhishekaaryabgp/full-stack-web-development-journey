// creating server port listning
const express = require("express");
const app = express();
let port = 8080;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
// below app.get and these are routes
app.get("/home", (req, res) => {
  res.send("You contacted root path :");
});
app.get("/node", (req, res) => {
  res.send("You contacted node path :");
});
app.get("/illogicalpath", (req, res) => {
  res.send("You contacted Illogical path :");
});
// we can also send post request
app.post("/post", (req, res) => {
  res.send("You sent post request to root path :");
});

// sending variables as a parameter
app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  res.send(`Welcome to the page of @${username} and ID : ${id}`);
});

// for query search :
app.get("/search", (req, res) => {
  let { q } = req.query;
  if(!q){
    res.send(`<h3>Nothing searched!</h3>`)
  }
  console.log(req.query);
  res.send(`<h3>Search Results : ${q}</h3>`);
});

// if user send any path that dont exist but still give answer
app.use((req, res) => {
  //  this will also work if user enter any path
  // note => you can also show perticular status like res.staus(404).send();
  res.send("You contacted the path that doesn't exist my dear:");
});

// app.use((req, res) => {
//   console.log(req);
//   console.log("Recieved");
//    below we are send object also from responce and it wil be converted by express in json format
//    res.send({
//      fruit1: "apple",
//      fruit2: "banana",
//    });
//    we can also send in html format
//      res.send(
//        "<h1> Html Response </h1> <ul> <li> Abhishek</li></ul> <ul><li> Tina</li></ul> ",
//      );
//  });
