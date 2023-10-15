const connectToDatabase = require("../config/db.config");
const transporter = require("../config/transporter.config");

//check for existing mail
const checkSubscriber = async (req, res, next) => {
  try {
    var mailaddress = req.body.mail;
    var email = mailaddress.toLowerCase();
    var db = await connectToDatabase();
    var collection = await db.collection("subscribers");
    var subscribed = await collection.findOne({ mail: email });
    subscribed
      ? next()
      : res.status(404).json({
          success: false,
          message: "User is not a subscriber",
        });
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
};

//Check for non existing mail
const checkNonSubscriber = async (req, res, next) => {
  try {
    var mailaddress = req.body.email;
    var email = mailaddress.toLowerCase();
    var db = await connectToDatabase();
    var collection = await db.collection("subscribers");
    var subscribed = await collection.findOne({ mail: email });
    subscribed
      ? res.status(409).json({
          success: false,
          message: "User already subscribed",
        })
      : next();
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
};

//Add Subscriber to db
const subscribe = async (req, res, next) => {
  var mailaddress = req.body.email;
  var subscriber = { mail: mailaddress.toLowerCase() };
  try {
    var db = await connectToDatabase();
    var subscribers = await db.collection("subscribers");
    subscribers.insertOne(subscriber, function (err, res) {
      if (err) throw err;
      // res.status(200).json({
      // message: subscriber.mail + " has being added to our newsletter",
      // });
      next();
    });
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
};

//Send welcome mail to subscriber
const mailSubscriber = async (req, res) => {
  var mailaddress = req.body.email;
  var mail = mailaddress.toLowerCase();
  try {
    var mailOptions = {
      from: '"Esquire Resorts" <esquireresorts@gmail.com>',
      to: mail,
      subject: "Welcome to Exclusive Offers",
      html: `<section 
                style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
                <h2 style="color: #333;">Welcome to Exclusive Offers!</h2>
                
               aQ<p style="margin-bottom: 15px;">
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
        console.log(error);
        res.status(501).json({
          success: false,
          message: "Invalid admin details. Mail couldn't send",
        });
      } else {
        res.status(200).json({ success: true, message: "Mail sent" });
        console.log("Message sent: " + info.response);
      }
    });
  } catch (error) {
    res.status(501).json({ success: false, error: error.message });
  }
};

const removeSubscriber = async (req, res) => {
  try {
    var mail = req.body.email;
    const subscriber = { mail: mail.toLowerCase() };
    var db = await connectToDatabase();
    var subscribers = await db.collection("subscriber");
    var result = await subscribers.deleteOne(subscriber);
    result.deeletedCount === 1
      ? res.status(200).json({
          message: subscriber.mail + " has unsubscribed from newsletter",
        })
      : res.status(404).json({ message: "User is still subscribed" });
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
};
module.exports = {
  subscribe,
  mailSubscriber,
  checkSubscriber,
  checkNonSubscriber,
  removeSubscriber,
};
