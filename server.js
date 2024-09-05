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
  return new Promise(() => {
    console.log(body);
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "jw.jeon24@gmail.com",
        pass: "qgrz cnoz tjle kwkk",
      },
    });

    const mail_configs = {
      to: "jw.jeon24@gmail.com",
      from: body.email,
      subject: `Email from ${body.name}`,
      text: `This email fron ${body.email} // ${body.message}`,
    };
    transporter.sendMail(mail_configs, function (err, info) {
      if (err) {
        console.log(err);
        return reject({ message: "Error" });
      }
      return resolve({ message: "Email sent successfully" });
    });
  });
}

app.post("/", (req, res) => {
  sendEmail(req.body.body.formDetails)
    .then((response) => response.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.listen(port, () => console.log("Server Running"));
