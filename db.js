const mongoose = require("mongoose");
require('dotenv').config();

let dbConnection;
async function dbConnect() {
  if (dbConnection) {
    return dbConnection;
  }

  try {
    dbConnection = await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to MongoDB Atlas!");
    return dbConnection;
  } catch (error) {
    console.log("Unable to connect to MongoDB Atlas!");
    console.error(error);
    throw error;
  }
}

module.exports = dbConnect;
