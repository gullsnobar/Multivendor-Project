// Load environment variables FIRST
require("dotenv").config({ path: "config/.env" });

const app = require("./app");
const connectDatabase = require("./db/Database");
const cloudinary = require("cloudinary");

// Handle uncaught exceptions (e.g. syntax errors)
process.on("uncaughtException", (err) => {
  console.log(` Error: ${err.message}`);
  console.log(`Shutting down server due to uncaught exception`);
  process.exit(1);
});

// Debug check — confirm environment variables are loaded
console.log("PORT =", process.env.PORT);
console.log(" MONGO_URI present?", !!process.env.MONGO_URI);

// Connect to MongoDB
connectDatabase();

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Create and start server
const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Handle unhandled promise rejections (e.g. DB errors)
process.on("unhandledRejection", (err) => {
  console.log(` Shutting down the server for: ${err.message}`);
  console.log(` Shutting down the server due to unhandled promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});
