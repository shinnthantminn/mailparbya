const express = require("express");
const app = express();
const fileupload = require("express-fileupload");
const { sendMail } = require("./mail");

app.set("views engine", "ejs");
app.use(fileupload());
app.use(express.json());

app.post("/api/v1/mail", async (req, res, next) => {
  await sendMail(req.body);
  res.send("mail send");
});

app.listen(3000, () => {
  console.log("server was running in port 3000");
});
