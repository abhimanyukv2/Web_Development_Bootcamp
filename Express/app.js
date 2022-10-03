const express = require("express")
const path = require("path")

const app = express()
port = 80

// For serving static Files
app.use('/static', express.static('static'))

// Set the template engine as pug
app.set('view engine','pug')

// Set the view directory
app.set('views',path.join(__dirname,'views'))

// Our pug demo endpoint
app.get("/demo",(req,res) => {
    res.status(200).render('demo',{ title: 'Hey', massage: 'Hello there! and thanks for telling for how to use pug'})
})

app.get("/",(req,res) => {
    res.status(200).send("This is home page my first expresss app with harry")
})
app.get("/about",(req,res) => {
    res.send("This is about page my first expresss app with harry")
})
app.post("/about",(req,res) => {
    res.send("This is a post request my first expresss app with harry")
})
app.post('/this',(req,res) => {
    res.status(400).send("This Page is not Found")
})

app.listen(port,() => {
    console.log(`This application is started successfully on port ${port}`)
});