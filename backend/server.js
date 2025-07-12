const express = require("express");
const app = express();

app.use(express.json());

const userRoutes = require("./routes/user.routes");
app.use("/api/users", userRoutes); // Mount at /api/users

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
