const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const port = 8088;

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

function sendEmail(body) {
  return new Promise((resolve, reject) => {
    console.log(2, body);
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mail_configs = {
      to: process.env.EMAIL_USER,
      from: body.email,
      subject: `Email from ${body.name}`,
      text: `This email fron ${body.email} // ${body.message}`,
    };
    transporter.sendMail(mail_configs, function (err, info) {
      if (err) {
        console.log(err);
        return reject({ message: "Error sending email" });
      }
      console.log(info);
      return resolve({ message: "Email sent successfully" });
    });
  });
}

app.post("/", (req, res) => {
  console.log(1, req.body);
  sendEmail(req.body.body)
    .then((response) => {
      res.send(response.message);
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      res.status(500).send(error.message);
    });
});

app.listen(port, () => console.log("Server Running"));
