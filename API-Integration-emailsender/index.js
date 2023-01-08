const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv');
const {sendMail} = require('./utilis/emailSender') //send request to Mailtrap.io 
const {eMessage}= require('./utilis/emailTemplate') //sent along with request to Mailtrap.io 

dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', express.static(__dirname+ '/views')); //FRONTEND-VIEWS FOLDER

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=> {
    console.log(`server listening on port ${PORT}`)
})

app.post('/', async (req, res) => { 
const {name, email, subject, message } = req.body; // request from index.html/user i.e frontend
try{
    if(!name && !email && !subject && !message)
    return res.json('incomplete data');

    await sendMail({ //send request to Mailtrap.io using emailsender but first put it in the emailTemplate-format below
        name, //variable declared in emailtemplete 
        email,
        subject,
        message: await eMessage(name, email, subject, message)//u need emailTemplate for confirmat message dat will be sent back to u.
    })
    res.status(201).json({message:'Email sent'}); //send reponse back to user/browser/client/postman 

}catch(err){
    // console.log(err);
    res.status(500).json({message:'Email not sent'}) //if error send reponse back to index.html/browser/client/postman
}
})