const express = require('express')
const projectroute = require('./route/projectroute');
const testimonialroute = require("./route/testimonialroute");

const app = express()

app.use(express.json());

app.get('/', (req, res)=>{
    res.send({msg: "welcome to my ass"})
})
app.use("/projects", projectroute);
app.use("/testimonial", testimonialroute);
app.listen(5000)