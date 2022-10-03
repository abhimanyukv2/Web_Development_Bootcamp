// console.log("Hello World")

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req,res) => {
    res.statusCode = 200;
    // res.setHeader('Content-Type','text/plain');
    res.setHeader('Content-Type','text/html');
    // res.end("Hello World");
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> Pseudo selector and more designing </title>
        <style>
            .container{
                border: 2px solid red;
                background-color: rgb(223, 245, 201);
                padding: 34px;
                margin: 34px auto;
                width: 666px;
            }
            a{
                text-decoration: none;
                color: black;
            }
            a:hover{
                color: rgb(5, 0, 0);
                background-color: rgb(221, 166, 38);
            }
            a:visited{
                background-color: yellow;
            }
            a:active{
                background-color: darkblue;
            }
            .btn{
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                font-weight: bold;
                background-color: crimson;
                padding: 6px;
                border: none;
                cursor: pointer;
                font-size: 13px;
                border-radius: 4px;
            }
            .btn:hover{
                background-color: rgb(223,245,201);
                color: darkgoldenrod;
                border: 2px solid black;
            }
        </style>
    </head>
    <body>
        <div class="container" id="count1">
            <h3> This is my heading </h3>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aut sed excepturi! Harum, incidunt modi enim voluptatum molestias doloremque quis ut asperiores, iure sunt veritatis libero vitae, sint tempore nesciunt officia facilis ullam suscipit! </p>
            <a href="https://google.com" class="btn">Read more</a>
            <button class="btn">Contact us</button>
        </div>
    </body>
    </html>`)
});

server.listen(port, hostname,() => {
    console.log(`Server running at http://${hostname}:${port}/`)
});