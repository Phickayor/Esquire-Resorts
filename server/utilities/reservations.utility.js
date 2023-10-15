const connectToDatabase = require("../config/db.config");

const get_reservations = async () => {
  try {
    const db = await connectToDatabase();
    const reservations = await db.collection("reservation");
    const results = await reservations.find({}).toArray();
    return { success: true, results };
  } catch (error) {
    return { success: false, error };
  }
};

module.exports = get_reservations;
