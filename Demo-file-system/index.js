// NodeJS:Creating a server with Node(PART 4)


const path = require('path')
const fs = require('fs')
const http = require('http')


///////
// const server = http.createServer((request, response) =>{
//     response.writeHead (200, {'Content-Type': 'text/html'})
//     response.end ('<h1>Hello everyone, Idris says hi</h1>')
// })

// const port = 5000

// server.listen(port, () => {
//     console.log(`server is running on port ${port}`)
// })

// USING HTTP TO CREATE SERVER(BACKEND) AND SHOW RESPONSE IN BROWSWER(FRONTEND)
///////note taker app
// NOTE: COMMENT-out index.css in index.html & index2.html to be able to run this
// const server = http.createServer((request, response) => { //E.G app.get('/', (res, req))
//     if(request.url === '/'){
//         let filePath = path.join(__dirname, 'public', 'index.html')
//         fs.readFile(filePath, 'utf8', (err, data) =>{
//         response.writeHead(200, {'Content-Type': 'text/html'})
//         response.end(data)  //e.g res.send
//     })
//     }
//     if(request.url === '/index2.html'){
//         let filePath = path.join(__dirname, 'public', 'index2.html')
//         fs.readFile(filePath, 'utf8', (err, data) =>{
//         response.writeHead(200, {'Content-Type': 'text/html'})
//         response.end(data)
//     })
//     }
// })

// const port = 5000

// server.listen(port, () => {
//     console.log(`server is running on port ${port}`)
// })


//////Template for reading any file-path/type
    const server = http.createServer((request, response) =>{
        let filePath = path.join(__dirname, 'public', request.url === '/'? 'index.html': request.url)
        let contentType = getContentType(filePath) || 'text/html'
        let emptyPagePath = path.join(__dirname, 'public', '404.html')
        fs.readFile(filePath, 'utf8', (err, content) => {
            if(err){     //if any error check further to see if its code-error i.e emptypagepath
                if(err.code === 'EN0ENT' ) {  // emptypagepath error-it will redirect and read 404html
                fs.readFile(emptyPagePath, 'utf8', (err, content) =>{
                    response.writeHead(200, {'Content-Type': contentType})
                    response.end(content)
                })
                }else{  //if its not code error then its server error
                response.writeHead(500)
                    response.end('A server error has occured')
                }
            }
            else{  // if no error then send data-content
            // if(!err){  // if no error then send data-content
                response.writeHead(200, {'Content-Type': contentType})
                    response.end(content)
            }

        })

    })
    const getContentType = (filePath) => {
        let extname = path.extname(filePath)
        if(extname === '.js'){
            return 'text/javascript'
        }
        if(extname === '.css'){
            return 'text/css'
        }
        if(extname === '.png'){
            return 'image/png'
        }
        if(extname === '.jpg'){
            return 'image/jpg'
        }
    }
    

    const port = 5000

server.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
