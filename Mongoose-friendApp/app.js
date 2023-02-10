const app = require('express')();
const e = require('express');
const mongoose = require('mongoose');


//????can i post to this database on postman if so how?
// e.g {"name": "abesh","age": 24,"netWorth":80000000000,"isCool": true}
//????also which url on postman is it localhost:27017/newdb or localhost:5000/

//connection string  mongodb //localhost: 27017
const connectionString = "mongodb://localhost:27017/newdb"
const {Schema} = mongoose;

//create a function to connect to the database
mongoose.connect(connectionString,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, (err) => {
    if (err) {
        console.log({err})
    } else {
        console.log("Database connected!")
    }
})

// npm install
// npm install --save-dev nodemon 

//uses
// run using npm start   OR node app.js
//mongodb is running already


 //schema
 const friendSchema = new Schema({
    name: String,
    age: Number,
    netWorth: Number,
    isCool: Boolean,
    cars: Array,
    status:{
        account: String,
        casAtHand: Number,
        hasPiggyVest: Boolean
    },
    relationshipHistory:[{
        name: String,
        startData: Date,
        endDate: Date,
        isActive: Boolean
    }]
});
const Friend = mongoose.model('Friend', friendSchema);


////create
////read
//find({}) -all
//find(query)
//find(id)
//find and update

//create new document in friends collection:
Friend.create({
    name: "Kingabesh",
    age: 40,
    netWorth:40000000000,
    isCool: true
}, function(err, friend){
    if(err) {
        console.log({err})
    }else {
        console.log({newFriend: friend})  //IT WILL SHOW RESULT IN THE TERMINAL

    }
})


//EXAMPLE WITHOUT APP/EXPRESS ROUTES --TEST USING CONSOLE.LOG
// //find
// Friend.find([name: "Kingabesh", age: 40, netWorth:300000], (err, friends) =>{
//     if(err) console.log(err)
//     else console.log({friends})
// })
// // const Friend = mongoose.model('Friend', friendSchema);


// //find and update
// Friend.findOneAndUpdate([ [name: "Kingabesh"], [name: "bola"] ], (err, friend) =>{
//     if(err) console.log(err);
//     if(!friend) {
//      console.log('friend does not exist')
//     }else{
//         friend.save((err, done) =>{
//             if (err) console.log(err);
//             else console.log("friend updated")
//         })
//     }
// })
// //const Friend = mongoose.model('Friend', friendSchema);


//EXAMPLE WITH APP/EXPRESS ROUTES ---TEST USING POSTMAN
// //create 4 routes
// //fetch all friends in the database --app.get
// //add a new friend to the database --app.post
// //update an existing friend
// //delete an existing friend

// app.get('/friends', (req, res) => {
//     Friend.find({}, (err, friends) =>{
//         if (err) {
//             return res.status(500).json({err})
//         }else {
//             return res.status(200).json({friends})
//         }
//     })
// })


app.listen(5000, () => console.log('app connected'))