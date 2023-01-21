const express = require('express');
const app = express();


const MongoClient = require('mongodb').MongoClient;
//connection string- mongodb //localhost: 27017
const connectionString = "mongodb://localhost:27017/bookshore"
//mongo client connect to the database
const client = new MongoClient(connectionString,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});





//FIND -using node index.js to call & console.log it
// client.connect((err, connectedClient) =>{
//     // if(err) throw err;
//     if(err) return res.status(500).json({message: err});
//     const db = connectedClient.db();
//     db.collection('books').find([]).toArray((err,result) => {
//         console.log(result)
//     })
        
// })


//FIND using route  '/books'
app.get('/books', (req, res) => {
client.connect((err, connectedClient) => {
    if(err) return res.status(500).json({message: err});
    const db = connectedClient.db(); 
    db.collection('books').find([]).toArray, (err,result) => {
        if(err) {
            return res.status(500).json({message: err})
        }
        return res.status(200).json({books: result })
  }
 })
})


///////write testing
app.get('/books', (req, res) => {
    client.connect((err, connectionString) => {
    if(err) return res.status(500).json
})
})


//INSERTONE using    route  '/books'
// app.post('/books', (req, res) =>{
//     client.connect((err, connectedClient) => {
//         if(err) 
//         return res.status(500).json({message: err});
//         const db = connectedClient.db();
//         db.collection('books').insertOne({
//             author: req.body.author,
//             title: req.body.title
//         }), (err,result) => {
//             if(err) {
//                 return res.status(500).json({message: err});
//             }
//             return res.status(200).json({message: "new book added to bookshop" })
        
//       }
//      })
//     })

app.listen(5000, () => console.log('server up and running'))