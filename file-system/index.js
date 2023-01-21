//// create file & content
var fs = require('fs');

fs.writeFile('myfirstFile.txt','Hello World', (err)=> {
   if (err) throw err;  //if there is an error throw error
   console.log('file created sucessfully');
})
//run the server-i.e node index.js

////append or update the file 
/////Note: append hello world with Learning Nodejs File System
// var fs = require('fs');

// fs.appendFile('myFirstFile.txt','\nLearning Nodejs File System', (err)=>{
//     if (err) throw err;
// console.log('file appended sucessfully');
// })


////read file
// var fs = require('fs');

// fs.readFile('test.html', (err, data)=>{
//     if (err) throw err;
//     console.log(data); //this will not display the html properly- show binary format
// })


////delete files
// var fs = require('fs');

// fs.unlink('demo.text', (err) =>{
//     if (err) throw err;
//     console.log('File deleted');
// });


////rename files
// var fs = require('fs');

// fs.rename('myFirstFile.txt','New-myFirstFile.txt',(err) =>{
// fs.rename('fs.js','New-fs.js',(err) =>{

//     if (err) throw err;
//     console.log('file renamed successfully');   
// } )



////read file -create server that read test.html
// var fs = require('fs');
// var http = require('http')

// http.createServer((req, res) => {
// fs.readFile('test.html', (err,data) => {
//     if (err) throw err;
//     res.writeHead(200, {
//         'Content-Type': 'text/html'
//     });
//     res.write(data);
//     res.end();
// })
// }).listen(4000); 
//run the server-i.e node fileSystem.js



////read myFirstFile
// var fs = require('fs');
// var http = require('http')

// http.createServer((req, res) => {
//     fs.readFile('myFirstFile.text', (err,data) => {
//         if (err) throw err;
//         res.writeHead(200, {
//             'Content-Type': 'text/plain'
//         });
//         res.write(data);
//         res.end();
//     console.log(data);
//     })
//     }).listen(4000);
    
//run the server-i.e node fileSystem.js
