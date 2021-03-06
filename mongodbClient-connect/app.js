// # mongod ==> create a mongodb server
// # mongo ==> starts the mongo shell
const app = require('express')();
const mongodb = require('mongodb');


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

  
//INSERT//////////
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
 


app.listen(5000, () => console.log('app connnected'))