 const jwt = require("jsonwebtoken");
const MongoClient = require("mongodb").MongoClient;
var url = `mongodb+srv://esquire:${process.env.DB_PASSWORD}@cluster0.ygqcnmi.mongodb.net`;
const payload = {
  // ... other claims or data ...
  iss: process.env.ISSUER_ID, // Set the issuer claim to your desired value
};
const secretKey = process.env.SECRET_KEY;

//AUTHENTICATION
exports.login = (req, res) => {
  var credentials = {
    email: req.body.email,
    pswd: req.body.pswd,
  };
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("esquire");
    dbo
      .collection("admin")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        result.map((user) => {
          if (
            user.email == credentials.email &&
            user.pswd == credentials.pswd
          ) {
            const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
            res.json({ status: "success", token });
          } else {
            res.json({ status: "failed" });
          }
        });
      });
  });
};

//AUTHORIZATION
exports.confirmtoken = (req, res) => {
  // Extract the token from the Authorization header
  const token = req.headers.authorization;
  const extractedToken = token.replace("Bearer ", "");
  try {
    // Verify the token
    const decodedToken = jwt.verify(extractedToken, secretKey);

    // The decoded token will contain the payload
    const { exp, iss } = decodedToken;

    //  Check token's expiration
    const currentTimestamp = Math.floor(Date.now() / 1000);
    if (exp < currentTimestamp) {
      // Token has expired, deny access
      console.log("Token has expired");
      window.location.href = "back";
      return;
    }

    if (iss !== payload.iss) {
      // Invalid issuer, deny access
      console.log("Invalid token issuer");
      window.location.href = "back";
      return;
    }
    // Token is valid, grant access
    res.status(200).json({ info: "success" });
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};
