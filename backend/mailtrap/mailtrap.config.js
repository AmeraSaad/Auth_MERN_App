const { MailtrapClient } = require("mailtrap");
require("dotenv").config();

const TOKEN = process.env.MAILTRAP_TOKEN;

module.exports.MailtrapClient = new MailtrapClient({
  token: TOKEN,
});

module.exports.sender = {
  email: "hello@demomailtrap.com",
  name: "linkedin clone",
};

// const recipients = [
//   {
//     email: "amiraabdelaziz428@gmail.com",
//   }
// ];

// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);