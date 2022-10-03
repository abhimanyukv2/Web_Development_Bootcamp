console.log("This is tutorial 53")

let names = "Harry"
let names1 = "Shubham"
let names2 = "Rohan"
let names3 = "Sagar"

let greetText = "Good Morning"

console.log(names + " is a good boy")
console.log(names1 + " is a good boy")
console.log(names2 + " is a good boy")
console.log(names3 + " is a good boy")

function greet(names,greetText="Greeting from javaScript"){
    let names1 = "names1"
    console.log(greetText + " " + names)
    console.log(names + " is a good boy")
}
greet(names, greetText)
greet(names1, greetText)
greet(names2, greetText)
greet(names3, greetText)
greet(names3)

let returnVal = greet(names2)
console.log(returnVal)

function sum(a,b,c){
    let d = a + b + c
    return d
    console.log("Function is returned")
}

let returnval1 = sum(1,2,3)
console.log(returnval1)