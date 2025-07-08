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
throw new Error('this is an uncaught exception')
Process.on('uncaughtException' , (err)=>{
    console.log('uncaught Exception' ,err.message)
    Process.exit()
})