const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

// Use CORS middleware to allow cross-origin requests
app.use(
  cors({
    origin: "http://127.0.0.1:5501/astuEstudent.html", // Replace with the actual port of your frontend, e.g., 'http://localhost:3001'
  })
);

// Built-in Express middleware to parse JSON requests
app.use(express.json());

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
