const nodemailer = require('nodemailer');

// Create a transporter
let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // Correct hostname
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'sugithra605@gmail.com',//sender mail
    pass: 'myoa jica jqzn mazy',//password of sender mail which is in hidden form generated from api
  }
});

// Define the email options
let mailOptions = {
  from: 'sugithra605@gmail.com',//sender mail
  to: 'sugi642005@gmail.com',//receiver mail
  subject: 'EventXplorer',//content om mail
  text: 'Thank you for registering with EventXplorer! We’re thrilled to have you join us and will send you more details soon. If you have any questions, feel free to reach out to us. '
 
};

// Send the email
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    return console.log(error);
  }
  console.log('Message sent: ' + info.response);
});





