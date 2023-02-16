const dotenv = require("dotenv");

const mongoose = require("mongoose");

dotenv.config();

const connection = async () => {
  mongoose.set("strictQuery", false);
  try {
    console.log(process.env.MONGODB_URL);
    await mongoose.connect(`${process.env.MONGODB_URL}`);
    console.log("Connected to MongoDB...");
  } catch (dbConnectionError) {
    console.error(dbConnectionError);
    console.error("Connection Failed...");
  }
};

module.exports = connection;
