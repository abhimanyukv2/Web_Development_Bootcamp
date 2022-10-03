const express = require("express")
const path = require("path")
const fs = require('fs')
const app = express()
port = 80

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static Files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine','pug') // Set the template engine as pug
app.set('views',path.join(__dirname,'views')) // Set the view directory

// ENDPOINTS
app.get('/',(req,res) => {
    const con = 'This is the best content on the internet so far so use it wiswly'
    const parans = {'title': 'PubG is the best game','content':con}
    res.status(200).render('index.pug',parans)
})
app.post('/',(req,res) => {
    Name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more

    let outputToWrite = `The name of the client is ${Name}, ${age} years old, ${gender},${address}. More about him/her${more}`
    fs.writeFileSync('output.txt', outputToWrite)

    const parans = {'massage':'Your form has been submitted successfully'}
    res.status(200).render('index.pug',parans)
})

// START THE SERVER
app.listen(port,() => {
    console.log(`This application is started successfully on port ${port}`)
});