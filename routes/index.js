var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Enviar correo con NodeJS' });
});

router.post('/sendMail', function (req, res) {
  console.log(req.body);
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: req.body.from,
      pass: 'acavaelpassword_detucorreo'
    }
  });
  //
  // // setup email data with unicode symbols
  let mailOptions = {
    from: '"Envie este correo desde nodejs 👻"' + req.body.from, // sender address
    to: req.body.to, // list of receivers
    subject: req.body.subject, // Subject line
    text: req.body.message, // plain text body
    html: req.body.message // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) throw err;
    console.log('Message %s sent: %s', info.messageId, info.response);
  });

  res.redirect('/');
});

module.exports = router;
