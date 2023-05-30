// How to send an email using nodemailer

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword',
  },
});

/*
To send to more that one receiver, add them to the to property, separated by commas
*/
var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com, mymotherfriend@yahoo.com, yourfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!',

  /*
  To send HTML formatted text in your email, 
  use the "html" property instead of the "text" property:
  */

  html: '<h1>Welcome</h1><p>That was super easy!</p>',
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
