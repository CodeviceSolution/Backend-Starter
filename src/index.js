// Import necessary modules
import connectDB from "./db/db.connection.js";
import dotenv from "dotenv";
import express from "express";

// Create an Express application instance
const app = express();

// Load environment variables from a .env file
dotenv.config({
  path: "./.env",
});

// Determine the port to use, defaulting to 5001 if not specified in .env
const PORT = process.env.PORT || 5001 || 5002 || 8000 || 8001 || 8002;

// Connect to the MongoDB database
connectDB()
  .then(() => {
    // Start the Express server after successfully connecting to the database
    app.listen(PORT, () => {
      console.log(`Server is up and running on PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    // Handle errors if MongoDB connection fails
    console.log(`Failed to connect to MongoDB ${err}`);
  });

// Export the configured Express application instance for use in other parts of the application
export { app };
