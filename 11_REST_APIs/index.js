//lets require express
const express = require("express");
const app = express();
const port = 8080;

// getting path
const path = require("path");
// lets create uuid it wil generate random id we already installed the npm package
const { v4: uuidv4 } = require("uuid");

// method overriding
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

// to understand api data by express we will parse
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
app.use(express.static(path.join(__dirname, "public")));

// creating post
let posts = [
  {
    id: uuidv4(), // it wil generate unique rando ids uuid version 4 ex => `1bhsdfu-32hfdsk-lahdirew' like that
    username: "Oggy",
    content: "hey i am a a Blue cat",
  },
  {
    id: uuidv4(),
    username: "jhaplu",
    content: "hey i am a cockroaches1",
  },
  {
    id: uuidv4(),
    username: "paplu",
    content: "hey i am a cockroaches2",
  },
  {
    id: uuidv4(),
    username: "taplu",
    content: "hey i am a cockroaches3",
  },
];

// lets get all data
app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts }); // rendering posts
});
// let post/new it will get request create perticular data
app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

// let post it will get add or create new data
app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  // now pushing or updating
  let id = uuidv4();
  posts.push({ id, username, content });
  // redirecting to get after updating
  res.redirect("/posts"); // by default it sends to get request
});

// for id
app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  console.log(id);
  // finding id
  let post = posts.find((p) => id === p.id);
  res.render("show.ejs", { post });
});

// no for Patch we will update content using patch note we can also use put
app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  let post = posts.find((p) => id === p.id);
  post.content = newContent;
  console.log(post);
  res.redirect("/posts"); // instant redirect
});
// edit route
app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", { post });
});

// Delete route
app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id !== p.id);
  res.redirect("/posts");
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
