const fs = require('fs');
const text = fs.readFileSync("tut64.txt","utf-8");
console.log("The content of file is")
console.log(text);

let text1 = fs.readFileSync("tut64.txt","utf-8");
text1 = text1.replace("browser","Rohan")
console.log("Creating a new File")
fs.writeFileSync("tut64_1.txt",text1)