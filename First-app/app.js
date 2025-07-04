//in js we have window as an obj , but instead of window we have "global " here

//global
// console.log();

// setTimeout();//for delays
// clearTimeout();

// setInterval();
// clearInterval();

// //instead of windows.console.log() in js we use global.console.log() here . ps- writting windows in js and global in nodejs before the commands is not at all ncessary 
// var message="somya";

// //the following will not run
// console.log(message);
// global.console.log(message);
// console.log(global.message);












//-----------------------------------------//
////IMPORTING MODULES
// const math = require('./logger.js');
// console.log(math.add(2,3));




//-----------------------------------------//
////Es molde - for ES module make sure u add "type": "module", in the package
// import {add} from './logger.js'
// console.log(add(2,3))









//-----------------------------------------//
//PATH MODULE
// //loading path object(built in) , path is an object with bunch of useful methods 
// const path= require('path');  //here './path   will not be used
// var pathobj=path.parse(__filename)  //this will not work until u don't remove "type"="module" from the package , cuz yeh sb common js k under hai
// console.log(pathobj)

// //The path.parse() method takes a full file path string (like __filename) and breaks it into its components:
// // {
// //   root: 'C:\\',
// //   dir: 'C:\\Users\\s\\Desktop',
// //   base: 'app.js',
// //   ext: '.js',
// //   name: 'app'
// // }
// // Each part of the path is extracted and returned as an object.






//-----------------------------------------//
//OS MODULE
// const os=require('os')
// var totalMemory=os.totalmem()
// var freeSpace=os.freemem()
// console.log('free-space '+freeSpace + ' , total memory '+totalMemory)

// //template string
// //ES6 / ES2015 : ECMAScript 6

// console.log(`Total Memory: ${totalMemory} and Free Space: ${freeSpace}`)





//-----------------------------------------//
//FILE SYSTEM MODULE
// //synch
// const fs=require('fs')
// const files=fs.readdirSync('./')
// console.log(files)

// //asynch
// fs.readdir('./',function(err,files){//all asynch operations take function as there last argument   , we call this function a callback
//     if(err) console.log('Error' , err);
//     else console.log('Result' , files)
// })
//





//-----------------------------------------//
//EVENTS
// //events are signals that indicates us tht sthg has happened
// //diff classes in node raises diff kinds of events
// const EventEmitter=require('events')   //here 'events' is a class
// const emitter=new EventEmitter()   //here emitter is an object

// //u have to register a listener and raise an event both together for it to work
// //1st - listener then 2nd-raising an event
// //register a listener
// emitter.on('messagelogged', function(){
//     console.log('Listener called')
// })

// //raise an event
// emitter.emit('messagelogged')                    //emit basically means making a noise , produce-signalling
// //but nthg will happen till we create a listener




//-----------------------------------------//
//EVENGT ARGUMENTS
// const EventEmitter=require('events')
// const emitter=new EventEmitter()

// //listener
// emitter.on('messagelogged',function(arg){  //here the function() can also store the event argument , it's an option
//     console.log('listener called',arg)
// })

// //raise an event
// emitter.emit('messagelogged', {id:1, url:'http://'})   //here 2nd argument is an object , that is caller "event argument"
// //by this technique we can pass data abt the event that just happened

// //now we can make this code even simpler by using "(arg)=>{} instead of function(arg){}"




