// only when you have to copy the data

//import {createReadStream , createWriteStream} from "fs";
// import path from "path";

// const inputFilePath=path.join(import.meta.dirname , "input.txt")
// const outputFilePath=path.join(import.meta.dirname , "output.txt")

// const readableStream=createReadStream(inputFilePath , {encoding:"utf-8",  highWaterMark:19 })
// const writeableStream=createWriteStream(outputFilePath)

// readableStream.pipe(writeableStream)



//-------------------------------//
//when you want to see chunks
//listen for data chunks 
import {createReadStream , createWriteStream} from "fs";
import path from "path";

const inputFilePath=path.join(import.meta.dirname , "input.txt")
const outputFilePath=path.join(import.meta.dirname , "output.txt")

const readableStream=createReadStream(inputFilePath , {encoding:"utf-8",  highWaterMark:19 })
const writeableStream=createWriteStream(outputFilePath)

//listen for data chunks
readableStream.on("data", (chunk)=>{
    console.log("Buffer(chunk:",Buffer.from(chunk)) //conversts the chunk to a buffer
    console.log("Received chunk:", chunk)//logs each 16 byte chunk
    writeableStream.write(chunk)
})
//handling stream end
readableStream.on("end", ()=>{
    console.log("file read compleated.")
    writeableStream.end()
})
//readableStream.pipe(writeableStream)
