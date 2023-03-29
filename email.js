const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");


const app = express();
app.use(cors());
app.use(express.json());
app.listen(5000, () => console.log("Server Running"));


const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "wrn2001@gmail.com",
      pass: "bodarrladdputldv",
    },
  });
  
contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

app.post("/", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const mail = {
        from: "Ryan Mee",
        to: email,
        subject: "Contact Form Submission",
        html: `<p>Name: ${name}</p>
                <p>Email: ${email}</p>`
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "ERROR" });
        } else {
            res.json({ status: "Message Sent" });
        }
    });
});