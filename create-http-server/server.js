const http = require('http');

///create a server with the HTTP variable
///1
// const server = http.createServer(function(req, res){
//     //Headers
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     //send back some information
//     res.end("Welcaome to Zuri internship");
// });


//////2
// const server = http.createServer(function(req, res){
//     //Headers
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     //send back some information
//     res.end(`
//     {
//         "name": "Ebuka",
//         "College": "Unilag",
//         "Occupation": "Software developer"
//     }
//     `);

// });

///3
const server = http.createServer(function(req, res){
    //Headers
    res.writeHead(200, {'Content-Type': 'text/html'});
    //send back some information
    res.end(`
    <html>
    <body style="background: black; text-align: center; color: blue;">
    <h>Welcome to this class</h1>
    <p>How are you all doing?</p>
    </body>
    </html>
    `);

});



//create a port
server.listen(4000, '127.0.0.1');
console.log('yes you have created a server');
