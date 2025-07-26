const express = require("express");
const app = express();

app.use(express.json());

const userRoutes = require("./routes/user.routes");
app.use("/api/users", userRoutes);

const jobRoutes = require("./routes/jobPosting.routes");
app.use("/api/jobs", jobRoutes);

const skillGapRoutes = require("./routes/skillGap.routes");
app.use("/api/skills", skillGapRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
