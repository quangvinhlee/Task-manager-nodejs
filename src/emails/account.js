const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'quangvinhle@outlook.com.au',
        subject:'Thanks for joining in!',
        text: `Welcome to the app, ${name}.`
    })
}

const sendCancelationEmail = (email, name) => { 
    sgMail.send({
        to: email,
        from: 'quangvinhle@outlook.com.au',
        subject: 'Goodbye!',
        text: `Goodbye ${name}. I hope to see you again soon.`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}