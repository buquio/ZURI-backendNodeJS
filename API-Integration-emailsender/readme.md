#Integrating 3rd party systems

## Requirements
1. NodeJS
2. Email service provider e.g Mailtrap.io, Gmail, Sendgrid, Courier, Amazon SES, Mailgun,mailchimp.
3. Postman

## Action points
1. Set up and install the dependencies
npm init -y
npm install nodemailer express dotenv body-parser
npm install nodemon --save dev (optional dev dependency)
-update the start commands in `package.json` (optional)
2. create a server
3. create a post request for sending mails
4. setup nodemailer
5a
5. create email template
6. test the email sending on postman, verify result on Mailtrap.io
7. contact us form on the frontend. vanilla JS to send request and receive response.

Then, visit: http://localhost:4000/