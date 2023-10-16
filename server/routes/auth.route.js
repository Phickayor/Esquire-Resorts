const express = require("express");
const { login, verify_token } = require("../controllers/auth.controller");
const router = express();

router.post("/login", login);
router.get("/profile", verify_token, (req, res) => {
  res.json({
    message: "You have access to this protected resource!",
    user: req.user,
  });
});

module.exports = router;
