// lets require the express
const express = require("express");
const app = express();

const port = 8080;
// a standard line we have to use always whenever we use post reques
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // to handle json data

app.get("/register", (req, res) => {
  let { username, password } = req.query;
  res.send(`Standard GET request Welcome : ${username}`);
});

app.post("/register", (req, res) => {
  let { username, password } = req.body;
  res.send(`Geting the Standard POST request Welcome :${username}`);
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
