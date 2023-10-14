const express = require("express");
const {
  check_reservation,
  create_reservation,
  send_reservation_mail,
} = require("../controllers/reservations.controller");
const router = express();

router.post("/check", check_reservation);
router.post("/create", create_reservation, send_reservation_mail);

module.exports = router;
