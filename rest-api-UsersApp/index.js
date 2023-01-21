const express = require('express');
const fs = require('fs');
const app = express();
const users = require('./users.json')

///get from home route
app.get('/', function(req, res){
    res.send('hello world')
})

////post to home route
app.post('/', function(req, res){ //testing
    res.send('this is a post request')
})

////fetch all users
app.get('/users', (req, res) => {
    return res.send({ users })//send the user-array as response to client
})

////a.create a new user from client's request(postman)
// app.post('/users', (req, res) => {
//     console.log(req.body)
//     users.push(req.body)//save/push newUser to users-variable above not users.json
//     console.log({ users })
// return res.json({ messge: "new user created"})//send back a response to client
// })

/////b. save new user to existing database i.e users.json SEE RESULT ON POSTMAN
app.post('/users', (req, res) => {
    console.log(req.body)
    users.push(req.body)//save/push newUser to users-variable above not users.json

//write the new user inside users.json file
    let stringifyData = JSON.stringify(users, null, 2) //first stringify the json data
   fs.writeFile('users.json', stringifyData, function(err) {
       if (err) {
           return res.status(500).json({ message: err }) //send back a response to client
       }
   })
    return res.status(200).json({ messge: "new user created"})//send back a response to client
})


//fetch a single user e.g GET http://localhost:3000/users/5
app.get('/users/:id', (req, res) => {
    let id = req.params.id;
    console.log(req.params.id)

    let foundUser = users.find(user => {
        return String(user.id) === id //string prevents it from checking but value & type
    })
    if (foundUser) {
        return res.status(200).json({ user: foundUser }) //send back a response to client
    }else {
    return res.status(404).json({ messge: "user not found"})//send back a response to client

    }
})




app.listen(3000, function() {
    console.log('server is up and running');
})