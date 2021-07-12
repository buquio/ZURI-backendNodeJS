
////////
// const path = require('path')

// let directory = path.join(__dirname) //to know what directory/folder the path_demo.js is in
// console.log(directory)

// ANS:C:\Users\Emmadon\Documents\ZURI NodeJS\Demo-file-system


/////
// const path = require('path')

// let filePath = path.join(__dirname, 'path_demo.js')
// console.log(filePath)
// ANS:C:\Users\Emmadon\Documents\ZURI NodeJS\Demo-file-system\path_demo.js

////
const path = require('path')

let filePath = path.join(__dirname, 'path_demo.js')

let fileExtension = path.extname(filePath)
let basename = path.basename(filePath)

console.log(fileExtension) //ANS: .JS
console.log(basename) //ANS: path_demo.js 



