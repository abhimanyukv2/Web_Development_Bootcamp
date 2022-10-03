const express = require("express");
const path = require("path");
const fs = require('fs');
const { default: mongoose } = require("mongoose");
const app = express();
mongoose.connect('mongodb://localhost/contactDance', {useNewUrlParser: true})
const bodyparser = require("body-parser")
const port = 8000;


// Define mongoose Schema
var contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
})
var Contact = mongoose.model('Contact', contactSchema)

//Express specific stuff
// app.use(express.static('static',option))
app.use('/static',express.static('static')); // for serving static file
app.use(express.urlencoded());

// Pug specific stuff
app.set('view engine','pug'); //set the template engine as pug
app.set('views', path.join(__dirname, 'views')); // set the views directory

// End points
app.get('/',(req,res) => {
    // const con = "This is the best dance academy in Mithila region"
    // const params = {'title': 'Harry Dance Academy is the best Academy', "content": con};
    const params = {    };
    res.status(200).render('home.pug',params);
});
app.get('/contact',(req,res) => {
    // const con = "This is the best dance academy in Mithila region"
    // const params = {'title': 'Harry Dance Academy is the best Academy', "content": con};
    const params = {    };
    res.status(200).render('contact.pug',params);
});
app.post('/contact', (req, res) => {
    var myData = new Contact(req.body)
    myData.save().then(() => {
        res.send("This item has been saved to the database")
    }).catch(() => {
        res.status(400).send("Item was not saved to the database")
    })
    // res.status(200).render('contact.pug')
})

// Satrt the server
app.listen(port, () => {
    console.log(`This Website started successfully on the post ${port}`);
});