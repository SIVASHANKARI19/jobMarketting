const express = require("express");
const app = express();
app.use(express.json());

const userRoutes = require("./routes/user.routes");
app.use("/api/users", userRoutes);

// Optional other routes if ready
// const jobRoutes = require("./routes/jobPosting.routes");
// const skillGapRoutes = require("./routes/skillGap.routes");
// app.use("/api/jobs", jobRoutes);
// app.use("/api/skills", skillGapRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
