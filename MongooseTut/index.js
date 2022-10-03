// grtting started with js


// 1st Method

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/harryKart', { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // We are connected
    // console.log('We are connected bro/sis..')
})


// 2nd method
// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://localhost:27017/test');

//   // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
// }


const kittySchema = new mongoose.Schema({
    name: String
})
kittySchema.methods.speak = function speak() {
    const greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have name"
    console.log(greeting)
}

var kitten = mongoose.model('harryKitty',kittySchema)

var harryKitty = new kitten({name: 'harryKitty'})
var harryKitty2 = new kitten({name: 'harryKitty2'})
// console.log(harryKitty.name)

// harryKitty.speak()

harryKitty.save(function(err,harryKitty){
    if (err) return console.error(err)
    // harryKitty.speak()
})
harryKitty2.save(function(err,harryKitty){
    if (err) return console.error(err)
    // harryKitty.speak()
})

kitten.find({name:"harryKitty2"},function (err,kittens){
    if (err) return console.error(err)
    console.log(kittens)
})