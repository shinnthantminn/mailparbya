const nodemailer = require("nodemailer");

const transpoter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  secure: true,
  port: 465,
  auth: {
    user: "shinthantmin32@zohomail.com",
    pass: "Pokemon@32",
  },
});

const sendMail = async (body) => {
  const ejs = require("ejs");
  ejs.renderFile(
    __dirname + "/views/email.ejs",
    {
      name: body.name,
      phone: body.phone,
      email: body.email,
      message: body.message,
    },
    async (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const mail = {
          from: "shinthantmin32@zohomail.com",
          // to: "khantnyuntminn@gmail.com",
          to: "shinthantmin32@gmail.com",
          subject: "Dear Khant Min Nyunt",
          html: data,
        };
        await transpoter.sendMail(mail, (err, info) => {
          if (err) {
            console.log("i am error", err);
          } else console.log(info);
        });
      }
    }
  );
};

module.exports = {
  sendMail,
};
// mail => smtp
// transpoter / user => transpoter => client

// name , email , phone , message
