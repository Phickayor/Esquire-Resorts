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
      console.log(details);
      if (error) {
        console.log(error);
        res.status(501).json({
          success: false,
          message:
            "Mail couldn't send \n Check your internet connection and try again",
        });
      } else {
        res
          .status(200)
          .json({ success: true, message: "Mail delivered successfully" });
        console.log("Message sent: " + info.response);
      }
    });
  } catch (error) {
    res.status(501).json({ message: error.message });
  }
};
module.exports = {
  send_message,
};
