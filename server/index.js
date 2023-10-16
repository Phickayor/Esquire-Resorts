const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
var newsletter_route = require("./routes/newsletter.route");
var contact_route = require("./routes/contact.route");
var reservation_route = require("./routes/reservations.route");
var admin_route = require("./routes/admin.route");
var auth_route = require("./routes/auth.route");
var payment_route = require("./routes/payment.route");
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
app.use("/payment", payment_route);
app.listen(8080, () => {
  console.log(`Server listening on 8080`);
});
