// # mongod ==> starts a mongodb server
// # mongo ==> starts the mongo shell
const app = require('express')();
const mongodb = require('mongodb');

//WHEN YOU USE THIS .MONGOCLIENT CONNECTS TO ATLAS --NOT SURE????
//THATS WHY ITS NOT SHOWING RESULT ON POSTMAN AND MONGODB COMPASS
//BUT SERVER IS RUNNING
//???  npm WARN mongoClient@1.0.0 No description


const { MongoClient } = mongodb;
//connection string  27017
const connectionString = "mongodb://localhost:27017/newdb"
//create a function to connnect to the database
async function connectToDB(str) {
const client = new MongoClient(str,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}
  );
  try{
      await client.connect();
      return client.db()
  }catch (error){
      console.log(err)
  }
  }
  
  // npm install
// npm install --save-dev nodemon 

//uses
// run using npm start   OR node app.js
//mongodb is running 

  
//INSERT//////////see result on mongodb compass
//result IS NOT SHOWING on mongodb compass
  connectToDB(connectionString)
  .then(db =>{
    console.log('database connected') 
    db.collection('friends').insertOne({
        name: "Xyluz",
        age: 120,
        netWorth:4000000000000
    }) 
    .then (doc =>{
        console.log({ doc })
    })  
  .catch(err => {
    console.log(err)
  })
})
 


app.listen(3000, () => console.log('app connnected'))