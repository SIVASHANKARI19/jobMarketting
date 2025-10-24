const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const userRoutes = require("./routes/user.routes");
app.use("/api/users", userRoutes);

const jobPostingRoutes = require("./routes/jobPosting.routes");
app.use("/api/jobs", jobPostingRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
