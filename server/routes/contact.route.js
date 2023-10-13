const express = require("express");
const { send_message } = require("../controllers/contact.controller");
const router = express();

router.post("/send-mail", send_message);

module.exports = router;
