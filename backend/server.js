const app = require("./app");
const connectDatabase = require("./db/Database");
const cloudinary = require("cloudinary");
const dotenv = require("dotenv");

// Load environment variables from backend/config/.env
// dotenv.config({ path: "./config/.env" });

dotenv.config({ path: "./backend/config/.env" });



// Handling uncaught exceptions
process.on("uncaughtException", (err) => {
  console.error(`Error: ${err.message}`);
  console.error("Shutting down the server for uncaught exception");
  process.exit(1);
});

// Connect Database
connectDatabase();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Start Server
const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
  console.log(` Server is running on http://localhost:${PORT}`);
  console.log(` PORT = ${process.env.PORT}`);
  console.log(` MONGO_URI present? ${!!process.env.MONGO_URI}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.error(`Unhandled Promise Rejection: ${err.message}`);
  console.error("Shutting down the server...");
  server.close(() => process.exit(1));
});
