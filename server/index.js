const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const bookingsroute = require("./routes/bookings");
const mailsroute = require("./routes/mails");
const paymentroute = require("./routes/payment");
const adminroute = require("./routes/admin");
const authroute = require("./routes/auth");
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(
    cors({
        origin: ["https://www.esquireresorts.com", "https://esquireresorts.com",'http://localhost:3000'], // restrict calls to those this address
        methods: ["POST"] // only allow POST requests
    })
);
app.post("/checkbooking",bookingsroute.checkbooking);
app.post("/booking",bookingsroute.booking);
app.post("/sendreservation", mailsroute.sendreservation);
app.post('/subscribe',mailsroute.subscribe);
app.post("/feedback", mailsroute.feedback);
app.get('/verify/:reference', paymentroute.confirmpayment);
app.get("/reservations", adminroute.reservations);
app.post("/sortreservations", adminroute.sortreservations);
app.post("/login", authroute.login);
app.get("/confirmtoken",authroute.confirmtoken);
app.listen(8080, () => {
    console.log(`Server listening on 8080`);
});
