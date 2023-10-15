const express = require("express");
const {
  all_reservations,
  filter_reservations,
} = require("../controllers/admin.controller");
const router = express();
router.get("/reservations", all_reservations);
router.post("/filter-reservations", filter_reservations);

module.exports = router;
