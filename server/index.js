const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
var newsletter_route = require("./routes/newsletter.route");
var contact_route = require("./routes/contact.route");
var reservation_route = require("./routes/reservations.route");
var admin_route = require("./routes/admin.route");
var auth_route = require("./routes/auth.route");
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(cors());
app.use("/newsletter", newsletter_route);
app.use("/contact", contact_route);
app.use("/reservation", reservation_route);
app.use("/admin", admin_route);
app.use("/auth", auth_route);
// app.post("/checkbooking",bookingsroute.checkbooking);
// app.post("/booking",bookingsroute.booking);
// app.post("/sendreservation", mailsroute.sendreservation);
// app.post('/subscribe',mailsroute.subscribe);
// app.post("/feedback", mailsroute.feedback);
// app.get('/verify/:reference', paymentroute.confirmpayment);
// app.get("/reservations", adminroute.reservations);
// app.post("/sortreservations", adminroute.sortreservations);
// app.get("/confirmtoken",authroute.confirmtoken);
app.listen(8080, () => {
  console.log(`Server listening on 8080`);
});
