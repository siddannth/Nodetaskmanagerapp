 const sgMail = require('@sendgrid/mail')
 const sendgridAPIKey = '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' 
 sgMail.setApiKey(sendgridAPIKey)

 const sendWelcomeEmail = (email , name) => {

    sgMail.send({
 to: email,
    from : 'sidhantprince72@gmail.com',
    subject : 'welcome',
    text : `${name} hi how are you`
 })
}

const sendCancelationEmail = (email , name) => {

    sgMail.send({
 to: email,
    from : 'sidhantprince72@gmail.com',
    subject : 'cancel',
    text : `${name} byee see you`
 })
}


  

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
   

   