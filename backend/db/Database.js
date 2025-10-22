const mongoose = require("mongoose");

const connectDatabase = async () => {
  // Accept both MONGO_URI or DB_URL just in case
  const uri = process.env.MONGO_URI || process.env.DB_URL;

  if (!uri) {
    console.error(" Missing MongoDB URI. Please set MONGO_URI in config/.env");
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(` MongoDB connection failed: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDatabase;
