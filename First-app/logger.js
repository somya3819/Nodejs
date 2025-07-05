//modules                     =       (logger.js)
//commonjs
// function add(a, b){
//     return a+b;
// }
// module.exports={add};



//Es molde - for ES module make sure u add "type": "module", in the package                             =       (logger.js)
// export function add(a, b){
//     return a+b;
// }





//MODULE WRAPPER    =       (logger.js)

// (function (exports, require ,module , __filename, __dirname ){   //In Node.js, module wrapper functions are used internally by Node to encapsulate each module and provide a private scope for its variables. You don’t usually write this wrapper yourself—Node does it automatically for every module you create.
//     var url='http://mylogger.io/log';
//  function add(a, b){
//     return a+b;
// }
// module.exports={add};
// });





//Extending EvenetEmiter                            =       (logger.js)
// const EventEmitter=require('events');

// class Logger extends EventEmitter{
//  log(message){      //when a function is inside a class , we don't have to write function in the begining and it becomes method
//     console.log(message)

//     //raising an event
// this.emit('messagelogged' , {id:1 , url:'http://'});
// }
// }

// module.exports=Logger