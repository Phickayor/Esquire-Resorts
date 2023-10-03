var nodemailer = require("nodemailer");
const MongoClient = require("mongodb").MongoClient;
var url = `mongodb+srv://esquire:${process.env.DB_PASSWORD}@cluster0.ygqcnmi.mongodb.net`;

//TRANSPORTER
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});
//RESERVATION MAIL
exports.sendreservation = (req, res) => {
  var reservationDetails = {
    rname: req.body.roomname,
    name: req.body.name,
    arrivalDate: req.body.arrivalDate,
    depatureDate: req.body.depatureDate,
    guestNumber: req.body.guestNumber,
    price: req.body.price,
    mail: req.body.email,
    ref: req.body.ref,
  };

  //mail options
  var mailOptions = {
    from: '"Esquire Resorts" <esquireresorts@gmail.com>',
    to: reservationDetails.mail,
    subject: reservationDetails.name + "'s Reservation Details",
    html: `
            <section style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
                <h2 style="color: #333;">Reservation Details</h2>
                
                <p style="margin-bottom: 15px;">
                    Dear ${reservationDetails.name},
                </p>
                
                <ul style="list-style: none; padding: 0;">
                    <li><strong>Room Name:</strong> ${reservationDetails.rname}</li>
                    <li><strong>Arrival Date:</strong> ${reservationDetails.arrivalDate}</li>
                    <li><strong>Departure Date:</strong> ${reservationDetails.depatureDate}</li>
                    <li><strong>Guest Number:</strong> ${reservationDetails.guestNumber}</li>
                    <li><strong>Price:</strong> ₦${reservationDetails.price}</li>
                    <li><strong>Reference:</strong> ${reservationDetails.ref}</li>
                </ul>
                
                <p>
                    Thank you for choosing our services. We are delighted to confirm your reservation for the ${reservationDetails.rname} from ${reservationDetails.arrivalDate} to ${reservationDetails.depatureDate}. If you have any further questions or need assistance, please don't hesitate to contact us.
                </p>
                
                <p style="margin-top: 15px;">
                    Best regards,<br>
                    Esquire Resorts
                </p>
            </section>`,
  };
  //send mail
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: " + info.response);
    res.send("Mail Sent");
  });
};

//SUBSCRIBTION MAIL
exports.subscribe = (req, res) => {
  var email = { mail: req.body.mail };
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("esquire");
    dbo
      .collection("subscribers")
      .find({}, { projection: { _id: 0, mail: 1 } })
      .toArray(function (err, result) {
        if (err) throw err;
        if (result.find((obj) => obj.mail === email.mail) !== undefined) {
          console.log("Existing User");
          res.json({ status: "Existing User" });
        } else {
          dbo.collection("subscribers").insertOne(email, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted");
          });
          res.json({ status: "subscribed" });

          //mail options
          var mailOptions = {
            from: '"Esquire Resorts" <esquireresorts@gmail.com>',
            to: email.mail,
            subject: "Welcome to Exclusive Offers",
            html: `
                    <section 
                    style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
                    <h2 style="color: #333;">Welcome to Exclusive Offers!</h2>
                    
                    <p style="margin-bottom: 15px;">
                      Hey subscriber,
                    </p>
                    
                    <p>
                      Thank you for subscribing to our exclusive offers! We are thrilled to have you on board and look forward to bringing you exciting deals and promotions.
                    </p>
                    
                    <p>
                      As a valued subscriber, you will receive access to limited-time offers, special discounts, and insider updates on our latest products and services.
                    </p>
                    
                    <p>
                      Stay tuned for upcoming emails that will provide you with exclusive opportunities to save big and enhance your experience with us. If you have any questions or need assistance, please feel free to reach out to our dedicated support team.
                    </p>
                    
                    <p style="margin-top: 15px;">
                      Welcome aboard!<br>
                      Esquire Resorts
                    </p>
                  </section>`,
          };
          //send mail
          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              return console.log(error);
            }
            console.log("Message sent: " + info.response);
          });
        }
      });
  });
};

//RECEIVE FEED BACK OR ENQUIRY MAIL
exports.feedback = (req, res) => {
  var details = {
    name: req.body.name,
    subject: req.body.subject,
    email: req.body.email,
    message: req.body.message,
  };

  var mailOptions = {
    from: `"Esquire Resorts" <${details.email}>`,
    to: process.env.MAIL_USERNAME,
    subject: details.subject,
    text: details.message + " " + details.email,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      res.json({ info: "failed" });
      console.log(err);
    } else {
      console.log("Email sent: " + info.response);
      res.json({ info: "success" });
    }
  });
};
