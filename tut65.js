// Synchronous or blocking - line by line executing 
// Asynchronous or non-blocking - line by line execution not guaranteed
// Asynchronous or non-blocking - callbacks will fire

const fs = require('fs');
// let text = fs.readFile("tut64.txt",'utf-8');
let text1 = fs.readFile("tut64.txt",'utf-8',(err,data) =>{
    console.log(err,data)
});
console.log("This is a massage")