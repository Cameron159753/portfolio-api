const express = require("express");
const app = express.Router();
const fixArrayId = require("../helper");

let projects = [
  {
    id: 1,
    img: "https://i.postimg.cc/43tLvMTM/navbar.png",
    title: "navbar",
    github: "https://github.com/Cameron159753/navbar",
    netlify: "https://serene-jackson-f63d23.netlify.app/",
  },
  {
    id: 2,
    img: "https://i.postimg.cc/VvTnVfqF/mock-port.png",
    title: "mock portfolio",
    github: "https://github.com/Cameron159753/testimonial",
    netlify: "https://confident-nobel-841bfe.netlify.app/",
  },
  {
    id: 3,
    img: "https://i.postimg.cc/yNP9zXhx/todolist.png",
    title: "ToDo List",
    github: "https://github.com/Cameron159753/ToDoList",
    netlify: "https://vigilant-bell-f549f1.netlify.app/",
  },
];

app.get("/", (req, res) => {
  res.send(projects);
});

app.get(":id", (req, res) => {
  const project = projects.find((project) => project.id == req.params.id);
  if (!project)
    res
      .status(404)
      .send({ msg: "project is gone....shame... feels bad dude :((" });
  res.send(project);
});

// create
app.post("/", (req, res) => {
  let { title, img, github, netlify } = req.body;
  if (!title || !img || !github || !netlify)
    res.status(400).send({ msg: "not all informastion snend" });
  let newProject = {
    id: projects.length + 1,
    title,
    img,
    github,
    netlify,
  };
  projects.push(newProject);
  res.send(newProject);
});
// update
app.put("/:id", (req, res) => {
  let project = projects.find((project) => project.id == req.params.id);
  if (!project) res.status(404).send({ msg: "proejct mpy foidn" });
  let { title, img, github, netlify } = req.body;

  if (title) project.title = title;
  if (img) project.img = img;
  if (github) project.github = github;
  if (netlify) project.netlify = netlify;

  res.send(project);
});
// delete
app.delete("/:id", (req, res) => {
  let project = projects.find((project) => project.id == req.params.id);
  let index = projects.indexOf(project);
  projects.splice(index,1);
  fixArrayId(projects);
  res.send({ msg: "item removed" });
});

module.exports = app;
