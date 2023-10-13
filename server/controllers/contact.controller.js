const transporter = require("../config/transporter.config");

const send_message = async (req, res) => {
  try {
    var details = {
      name: req.body.name,
      subject: req.body.subject,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message,
    };

    var mailOptions = {
      from: `"Esquire Resorts" <${details.email}>`,
      to: process.env.MAIL_USERNAME,
      subject: details.subject,
      text: `${details.message} ${details.email} ${details.phone}`,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        res
          .status(501)
          .json({ message: "Invalid details. Mail couldn't send" });
      } else {
        res.status(200).json({ message: "Mail sent" });
        console.log("Message sent: " + info.response);
      }
    });
  } catch (error) {
    res.status(502).json({ message: error.message });
  }
};
module.exports = {
  send_message,
};
