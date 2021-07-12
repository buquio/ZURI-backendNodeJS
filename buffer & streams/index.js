const fs =  require('fs');


/////////////
//create Readstream
const dataReadstream = fs.createReadStream(__dirname + '/data.json', 'utf8');

dataReadstream.on('data', (chunk) => {
    console.log('new chunk received!!' );
    console.log(chunk);

})

////////////////
//create writestream
const dataWritestream = fs.createWriteStream('$(__dirname/write.txt');

dataReadstream.on('data', (chunk) => {
    console.log('new chunk received!!' );

//write stream
dataWritestream.write(chunk)
})

///////////////
//pipe (another way of writestream)-u can only pipe readstream to writestream
const dataReadstream = fs.createReadStream(__dirname + '/data.json', 'utf8');

const dataWritestream = fs.createWriteStream('$(__dirname/write.txt');
//pipe
dataReadstream.pipe(dataWritestream); //u pass in your writestreamdata


///////////////
//send pipe stream to client
const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/plain'});

    const dataReadstream = fs.createReadStream(`${__dirname}/data.json`, 'utf8');
    dataReadstream.pipe(res);
});

//listen
server.listen(5000, 'localhost', () => {
    console.log("Now listening on port 5000")
})




// TASK 1
const fetch = require("node-fetch");
const fs =  require('fs');
//NOTE:  npm install node-fetch

fetch("http://jsonplaceholder.typicode.com/posts")
.then((res) =>{
    const dest = fs.createWriteStream("./result/post.json")
    console.log("file wriiten");
    res.body.pipe(dest);
})


////TASK 2
'use strict'
const fs =  require('fs');
const path = require('path')
const axios = require('axios')

async function downloadText() {
    const url = 'http://jsonplaceholder.typicode.com/posts'
    const textPath = path.resolve(__dirname, 'result, 'posts.json')
    const writer = fs.createWriteStream(textPath);
    
    const resp = await axios({
        url: url,
        method: 'GET',
        responseType: 'stream'
    })
    resp.data.pipe(writer)
    return new Promise((resolve, reject) => {
        writer.on('finished', resolve)
        writer.on('error', reject)

    })
}
downloadText()
