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











//importing modules
// const math = require('./logger.js');
// console.log(math.add(2,3));


//Es molde - for ES module make sure u add "type": "module", in the package
import {add} from './logger.js'
console.log(add(2,3))
