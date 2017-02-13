const nodemailer = require('nodemailer');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'informaticosgb@gmail.com',
    pass: 'tupassgmail'
  }
});

// setup email data with unicode symbols
let mailOptions = {
  from: '"Fred Foo 👻" <informaticosgb@gmail.com>', // sender address
  to: 'informaticosgb@gmail.com', // list of receivers
  subject: 'Hello ✔', // Subject line
  text: 'Hello world ?', // plain text body
  html: '<b>Hello world ?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (err, info) => {
  if (err) throw err;
  console.log('Message %s sent: %s', info.messageId, info.response);
});
