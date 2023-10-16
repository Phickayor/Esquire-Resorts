const connectToDatabase = require("../config/db.config");
const jwt = require("jsonwebtoken");
const secret_key = process.env.SECRET_KEY;
const login = async (req, res) => {
  try {
    let { email, pswd } = req.body;
    const db = await connectToDatabase();
    const admin = await db.collection("admin");
    const admin_details = await admin.find({}).toArray();
    const user = admin_details.find(
      (u) => u.email === email && u.pswd === pswd
    );
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Email does not match password" });
    } else {
      const token = jwt.sign({ ...user }, secret_key);
      res.status(200).json({ success: true, token });
    }
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
};

const verify_token = async (req, res, next) => {
  try {
    var token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" }); // Unauthorized
    } else {
      // Token Verification
      jwt.verify(token, secret_key, (err, user) => {
        if (err) {
          return res.status(403).json({ message: "Invalid Token" }); // Forbidden (invalid token)
        } else {
          req.user = user;
          next();
          // return res.status(200).json({ message: "Valid Token" }); // Authorized
        }
      });
    }
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
};
module.exports = {
  login,
  verify_token,
};
