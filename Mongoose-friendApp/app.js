const app = require('express')();
const mongoose = require('mongoose');


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
    isCool: true,
}, function(err, friend){
    if(err) {
        console.log({err})
    }else {
        console.log({newFriend: friend})

    }
})


//EXAMPLE WITHOUT ROUTES
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


//EXAMPLE WITH ROUTES
// //create 4 routes
// //fetch all friends in the database:
// //add a new friend to the database
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