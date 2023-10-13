const express = require("express");
const {
  checkNonSubscriber,
  subscribe,
  mailSubscriber,
  checkSubscriber,
  removeSubscriber,
} = require("../controllers/newsletter.controller");
const router = express();

router.post("/add", checkNonSubscriber, subscribe, mailSubscriber);
router.post("/remove", checkSubscriber, removeSubscriber);

module.exports = router;
