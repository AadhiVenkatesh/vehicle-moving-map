const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Root URL route
app.get("/", (req, res) => {
  res.send("Welcome to the Vehicle Tracking API");
});

// API endpoint to serve vehicle data
app.get("/api/vehicle-data", (req, res) => {
  const filePath = path.join(__dirname, "vehicleData.json");
  console.log(`Reading file from: ${filePath}`);

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading vehicle data:", err);
      return res.status(500).send("Server error");
    }
    console.log("File read successfully:", data);
    res.json(JSON.parse(data));
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
