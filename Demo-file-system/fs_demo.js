
const fs = require('fs')
const path = require('path')


//file system
///Read from a file
// let filePath = path.join(__dirname, 'demo.txt')

// fs.readFile(filePath, 'utf8', (err, data) =>{
//     console.log(data)
//     // console.log(err)

// })


//Read a non-existing file e.g file.json
// let filePath = path.join(__dirname, 'demo.txt')

// fs.readFile('file.json','utf8',(err, data) =>{ //no file.json
//     if(err) throw err
//     console.log(data)
// })





//////////READ AND WRITE FROM A FILE
/////write to a file -but if file does not exist-it create the file and write in it 

// fs.writeFile('file.json',"I am a frontend developer",(err) =>{ //shows red: not a proper json file see below
//     if(err) throw err
// })


/////write to a file -but if file does not exist-it create the file and write in it 
// let filePath = path.join(__dirname, 'demo.txt')
// fs.writeFile('file.json', JSON.stringify(["I am a frontend developer"]),(err) => {
//     if(err) throw err
// })


///// read file
// fs.readFile('file.json','utf8, (err, content) =>{ 
//     if(err) throw err
// console.log(content)
// }) 

/////Append to an existing file
// fs.appendFile('file.json', JSON.stringify(["I am a backend developer"]),(err) => {
//     if(err) throw err
// })


/////Read from a file + write to a file -this appends content2 directly to content1 in the same array
fs.readFile('file.json','utf8',(err, content) =>{
    if(err) throw err
    let data = JSON.parse(content)
    data.push("I am a software developer")
    fs.writeFile('file.json', JSON.stringify(data),(err) => {
        if(err) throw err
    })

})

