const MongoClient = require("mongodb").MongoClient;
const url = `mongodb+srv://esquire:${process.env.DB_PASSWORD}@cluster0.ygqcnmi.mongodb.net/`;
const dbName = "esquire";
let dbInstance = null;

async function connectToDatabase() {
  if (dbInstance) {
    return dbInstance;
  }

  try {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    dbInstance = db;
    return dbInstance;
  } catch (err) {
    throw err;
  }
}

module.exports = connectToDatabase;
