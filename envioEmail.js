const nodemailer = require('@nodemailer/pro');
const template= require('./lib/templates.js');

let obj = {
        nombre: process.argv[2], //Name
        email: process.argv[3], //Email
        hash: '5887d4fc097486a5e9e3e23a'
    };

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'email@gmail.com',
        pass: 'CLAVE'
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"${obj.nombre} 👻" <${obj.email}>', // sender address
    to: obj.email, // list of receivers  to: 'mortega@providencia.cl, varriaza@providencia.cl',
    subject: 'email testing  ✔', // Subject line
    text: 'EMAIL DE PRUEBA ?', // plain text body
    html: template.emailConfirmacion(obj)
};


// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});
