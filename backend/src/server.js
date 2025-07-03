// src/server.js
const connectDB = require("./config/db");
connectDB();

const express = require("express");
const cors = require("cors");
require("dotenv").config(); // If you want to use .env


const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Sample route
app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

// ✅ Use your other routes
const userRoutes = require("./routes/user.routes");
app.use("/api/users", userRoutes);

// ✅ Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
