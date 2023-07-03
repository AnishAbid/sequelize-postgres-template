const sgMail = require('@sendgrid/mail');
const client = require('@sendgrid/client');
const path = require('path')

const sendEmail = async (templateName, data) => {
  sgMail.setApiKey(data.apiKey ?? process.env.SENDGRID_API_KEY);
  const generator = require(path.join(__dirname, '../templates/', templateName)) ?? null
  const emailData = {
    to: data.recieverEmail,
    from: process.env.SENGGRID_SENDER_EMAIL,
    subject: data.subject,
    html: generator.generateEmailHtml(data),
  };
  sgMail.send(emailData).then(() => { }, error => {
    console.error(error);
    if (error.response) console.error(error.response.body)
  });
}

const verifySendGrid = async (apikey) => {
  client.setApiKey(apikey);
  const request = {
    method: 'GET',
    url: '/v3/api_keys'
  };
  return client.request(request)
    .then(([response, body]) => {
      console.log(response.statusCode);
      console.log(body);
      return { code: response.statusCode }
    })
    .catch((error) => {
      return { code: 400 }
    });

}

module.exports = {
  sendEmail: sendEmail
}