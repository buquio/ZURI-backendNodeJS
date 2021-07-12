exports.eMessage = async (name, email, subject, message)=>{
    const html =`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Somebody wants to get in touch with you</h2>
    <div>
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
    </div>
    
</body>
</html>`

return html
}