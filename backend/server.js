const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// -----------------------------
// Health API
// -----------------------------

app.get("/api/health", (req, res) => {
  res.json({
    message: "Grolytics backend is running",
  });
});

// -----------------------------
// Dashboard API
// -----------------------------

app.get("/api/dashboard", (req, res) => {
  res.json({
    totalBills: 32,
    monthlySpend: 5120,
    topProduct: "Milk",
    averageSpend: 233,
  });
});

// -----------------------------
// Start server
// -----------------------------

app.listen(PORT, () => {
  console.log(
    `Grolytics backend running on port ${PORT}`
  );
});