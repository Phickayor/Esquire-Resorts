const express = require("express")
var nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const jwt = require("jsonwebtoken")
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
require("dotenv").config();
const app = express()
const path = require("path")
const morgan = require("morgan")
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(
    cors({
        origin: ["https://esquire-resorts.onrender.com"], // restrict calls to those this address
        methods: ["POST"] // only allow POST requests
    })
);
app.use(morgan("combined"))
var url = `mongodb+srv://esquire:${process.env.DB_PASSWORD}@cluster0.ygqcnmi.mongodb.net`;

// app.use(express.static(path.join(__dirname, '/../client', 'build')))

// app.get(`/`, (req, res) => {
//     res.sendFile(path.join(__dirname, '/../client', 'build', 'server', 'pages'));
// })
const oauth2Client = new OAuth2(
    process.env.OAUTH_CLIENTID, // ClientID
    process.env.OAUTH_CLIENT_SECRET, // Client Secret
    "https://developers.google.com/oauthplayground" // Redirect URL
);
oauth2Client.setCredentials({
    refresh_token: process.env.OAUTH_REFRESH_TOKEN
});
const accessToken = oauth2Client.getAccessToken()

app.get(`/sa`, (req, res) => {
    res.send({
        id: new Date().getTime(),
        name: "Esquire Resorts",
        location: 'Lagos Nigeria'
    })
})

//Transporter Details
var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        accessToken: accessToken
    }
})
const payload = {
    // ... other claims or data ...
    iss: process.env.ISSUER_ID, // Set the issuer claim to your desired value
};

const secretKey = process.env.SECRET_KEY

app.post("/checkbooking", function (req, res) {
    var info = {
        rname: req.body.roomname,
        arrivalDate: req.body.arrivalDate,
        depatureDate: req.body.depatureDate,
    }

    //Creating mongodb connection

    MongoClient.connect(url, function (err, db) {

        if (err) throw err
        var dbo = db.db("esquire");

        //Checking through reservation collection
        dbo.collection("reservation").find({}).toArray(function (err, result) {
            if (err) throw err;
            const arrival = new Date(info.arrivalDate)
            const departure = new Date(info.depatureDate)
            var status;
            for (var i = 0; i < result.length; i++) {
                const start = new Date(result[i].arrivalDate)
                const end = new Date(result[i].depatureDate)
                //Checking if reservation is booked already
                if (
                    (arrival >= start && arrival <= end) ||
                    (departure >= start && departure <= end) &&
                    (info.rname === result[i].rname)) {
                    status = "booked"
                    break;
                }
                //Checking if reservation is available
                else {
                    status = "available"
                }
            }
            console.log(status)
            res.json({ message: status })
            db.close()
        });
    })
})

// POST /booking
app.post("/booking", function (req, res) {
    var newinfo = {
        rname: req.body.sroomname,
        name: req.body.sname,
        arrivalDate: req.body.sarrivalDate,
        depatureDate: req.body.sdepatureDate,
        guestNumber: req.body.sguestNumber,
        price: req.body.sprice,
        mail: req.body.semail,
        ref: req.body.sref
    }

    MongoClient.connect(url, function (err, db) {
        if (err) throw err
        var dbo = db.db("esquire");

        dbo.collection("reservation").insertOne(newinfo, function (err, res) {
            if (err) throw err;
            db.close();
        })
        res.json({ info: "success" })
    })
})

// POST /sendreservation
app.post("/sendreservation", function (req, res) {
    var reservationDetails = {
        rname: req.body.roomname,
        name: req.body.name,
        arrivalDate: req.body.arrivalDate,
        depatureDate: req.body.depatureDate,
        guestNumber: req.body.guestNumber,
        price: req.body.price,
        mail: req.body.email,
        ref: req.body.ref
    }

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
            </section>`

    };
    //send mail
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
        res.send("Mail Sent")
    });

})

// POST /subscribe
app.post('/subscribe', function (req, res) {
    var email = { "mail": req.body.mail }
    MongoClient.connect(url, function (err, db) {
        if (err) throw err
        var dbo = db.db("esquire");
        dbo.collection("subscribers").find({}, { projection: { _id: 0, mail: 1 } }).toArray(function (err, result) {
            if (err) throw err;
            if (result.find(obj => obj.mail === email.mail) !== undefined) {
                console.log("Existing User")
                res.json({ "status": "Existing User" });
            }
            else {
                dbo.collection("subscribers").insertOne(email, function (err, res) {
                    if (err) throw err;
                    console.log("1 document inserted");
                })
                res.json({ "status": "subscribed" })

                //mail options
                var mailOptions = {
                    from: '"Esquire Resorts" <esquireresorts@gmail.com>',
                    to: email.mail,
                    subject: 'Welcome to Exclusive Offers',
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
                  </section>`
                };
                //send mail
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        return console.log(error);
                    }
                    console.log('Message sent: ' + info.response);
                });
            }
        })
    })
})
// POST /feedback
app.post("/feedback", function (req, res) {
    var details = {
        name: req.body.name,
        subject: req.body.subject,
        email: req.body.email,
        message: req.body.message
    }

    var mailOptions = {
        from: `"Esquire Resorts" <${details.email}>`,
        to: process.env.MAIL_USERNAME,
        subject: details.subject,
        text: details.message + " " + details.email
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            res.json({ "info": "failed" })
            console.log(err);
        } else {
            console.log("Email sent: " + info.response);
            res.json({ "info": "success" })
        }
    });
})

app.get("/reservations", function (req, res) {

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("esquire")
        dbo.collection("reservation").find({}).toArray(function (err, result) {
            res.send(result)
        })
    })
})

app.post("/sortreservations", function (req, res) {

    var filters = {
        "ref": req.body.ref,
        "rname": req.body.roomFilterSelected,
        "guest": req.body.guest
    }
    var filteredresult = [];
    MongoClient.connect(url, function (err, db) {
        if (err) throw err
        var dbo = db.db("esquire")
        dbo.collection("reservation").find({}).toArray(function (err, result) {
            if (err) throw err;
            result.map((eachroom) => {
                if (eachroom.rname == filters.rname || eachroom.guestNumber == filters.guest || eachroom.ref == filters.ref) {
                    filteredresult.push(eachroom)
                }
            })
            if (filteredresult.length != 0) {
                res.send(filteredresult)
            }
            else {
                res.send("Not Found")
            }
        })
    })
})

app.post("/login", function (req, res) {
    var credentials = {
        email: req.body.email,
        pswd: req.body.pswd
    }
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("esquire");
        dbo.collection("admin").find({}).toArray(
            function (err, result) {
                if (err) throw err;
                result.map((user) => {
                    if (user.email == credentials.email && user.pswd == credentials.pswd) {
                        const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
                        res.json({ status: "success", token });
                    }
                    else {
                        res.json({ status: "failed" })
                    }
                })
            })
    })
})
app.get("/confirmtoken", function (req, res) {
    // Extract the token from the Authorization header
    const token = req.headers.authorization;
    const extractedToken = token.replace('Bearer ', '');
    try {
        // Verify the token
        const decodedToken = jwt.verify(extractedToken, secretKey);

        // The decoded token will contain the payload
        const { exp, iss } = decodedToken;

        //  Check token's expiration
        const currentTimestamp = Math.floor(Date.now() / 1000);
        if (exp < currentTimestamp) {
            // Token has expired, deny access
            console.log('Token has expired');
            window.location.href = 'back'
            return;
        }

        if (iss !== payload.iss) {
            // Invalid issuer, deny access
            console.log('Invalid token issuer');
            window.location.href = 'back'
            return;
        }
        // Token is valid, grant access
        res.status(200).json({ info: 'success' });
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
})
app.listen(8080, () => {
    console.log(`Server listening on 8080`);
});