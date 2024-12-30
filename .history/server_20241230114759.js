const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the CORS package

const app = express();
const port = 3000;

// Use CORS middleware to allow cross-origin requests
app.use(cors()); // This allows all origins, you can customize it if needed

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Handle POST request from the login form
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Log the username and password in the terminal
  console.log("Received login credentials:");
  console.log("Username:", username);
  console.log("Password:", password);

  // Send a response back to the client
  res.send("Login credentials received");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
