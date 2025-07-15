import {createReadStream , createWriteStream} from "fs";
import path from "path";

const inputFilePath=path.join(import.meta.dirname , "input.txt")
const outputFilePath=path.join(import.meta.dirname , "output.txt")

const readableStream=createReadStream(inputFilePath , {encoding:"utf-8",  highWaterMark:19 })
const writeableStream=createWriteStream(outputFilePath)

readableStream.pipe(writeableStream)
