const express = require("express");
const app = express.Router();
const fixArrayId = require("../helper");

let testimonials = [
    {
      id: 1,
      img: "https://i.postimg.cc/ncSZz2Pf/Dalarno3.png",
      title: "Dalarno",
      paragraph: "Cameron, can be described as a smartworker, so much different from any other clients you'll have, he achieves expectations as well surpasses them. He would be a great addition to your team"
    },
    {
      id: 2,
      img: "https://i.postimg.cc/7hRkB1d2/Leigh-ann3-min.png",
      title: "Leigh-Anne",
      paragraph: "Cameron is a very delightful person with a unique personality. His always willing to help other. His a very smart worker and a problem solver.Cameron is a person with who you can speak openly to."
    },
    {
      id: 3,
      img: "https://i.postimg.cc/MHCLM9gd/alex.png",
      title: "Alex",
      paragraph: "Cameron has a natural talent when it comes to solving technical problems. He has good attention to detail."
    },
    {
      id: 4,
      img: "https://i.postimg.cc/CLM04Xqq/zharne.png",
      title: "Zharne",
      paragraph: "Cameron is a great web developer and produces high quality work. He is a problem-solver and is great to work with."
    },
   
  ];

app.get("/", (req, res) => {
  res.send(testimonials);
});

app.get(":id", (req, res) => {
  const testimonial = testimonials.find((testimonial) => testimonial.id == req.params.id);
  if (!testimonial)
    res
      .status(404)
      .send({ msg: "hahaha is gone....shame... feels bad dude :((" });
  res.send(testimonial);
});

// create
app.post("/", (req, res) => {
  let { title, img, paragraph } = req.body;
  if (!title || !img || !paragraph)
    res.status(400).send({ msg: "not all informastion snend" });
  let newTestimonial = {
    id: testimonials.length + 1,
    title,
    img,
   paragraph,
  };
  testimonials.push(newTestimonial);
  res.send(newTestimonial);
});
// update
app.put("/:id", (req, res) => {
  let testimonial = testimonials.find((testimonial) => testimonial.id == req.params.id);
  if (!testimonial) res.status(404).send({ msg: "testimonail mpy foidn" });
  let { title, img, github, netlify } = req.body;

  if (title) project.title = title;
  if (img) project.img = img;
  if (paragraph) project.paragraph = paragraph;


  res.send(paragraph);
});
// delete
app.delete("/:id", (req, res) => {
  let testimonail = testimonials.find((testimonail) => testimonail.id == req.params.id);
  let index = testimonials.indexOf(testimonail);
  testimonials.splice(index, 1);
  fixArrayId(testimonials);
  res.send({ msg: "item removed" });
});

module.exports = app;
