const express = require("express");
const verify_payment = require("../controllers/payment.controller");
const router = express();

router.get("/verify/:reference", verify_payment);

module.exports = router;
