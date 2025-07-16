// console.log("hello somya")
//"npm init -y" for importing/creating packages


//for importing ://common js
//const math = require('./math.js');
// console.log(math.add(2,3));



//ES module
// import {add} from './math.js'
// console.log(add(2,3))






//------------08.07.2025------------------//
//EXception - (uncaugt exception)

//try-catch block only handles synchronous exceptions
//promises handles asynchronous exceptions
// throw new Error('this is an uncaught exception')
// Process.on('uncaughtException' , (err)=>{
//     console.log('uncaught Exception' ,err.message)
//     Process.exit()
// })










//---------------------------15.07.2025---------------//
import http from 'http';
import { URL } from 'url';
const server = http.createServer((req, res)=>{
    const url = new URL(req.url,"http://${req.header.host}");
    const path = url.pathname;

    // res.setHeader("content-type","text/plain");
    res.setHeader("content-type","text/html");

    if(path === '/'){
        res.statusCode = 200;
        // res.end("This is my Home Page");
        res.end(`<html>
            <head>
            <title>Home</title>
            </head>
            <body>
                <h1>Welcome to my Home Page</h1>
            </body>
            </html>`);
    }
    else if(path === '/about'){
        res.statusCode = 200;
        // res.end("This is my About Page");
        res.end(`<html>
            <head>
            <title>About</title>
            </head>
            <body>
                <h1>Welcome to my About Page</h1>
            </body>
            </html>`);
    }
    else if(path === '/test'){
        res.statusCode = 200;
        // res.end("This is my Test Page");
        res.end(`<html>
            <head>
            <title>Test</title>
            </head>
            <body>
                <h1>Welcome to my Test Page</h1>
            </body>
            </html>`);
    }
    else{
        res.statusCode = 404;
        res.end("404 Not Found");
    }
});

server.listen(3000, ()=>{
    console.log("http://localhost:3000");
})