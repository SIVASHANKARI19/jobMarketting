const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const userRoutes = require("./routes/user.routes");
app.use("/api/users", userRoutes);

const jobRoutes = require("./routes/jobPosting.routes");
app.use("/api/jobs", jobRoutes);

const skillGapRoutes = require("./routes/skillGap.routes");
app.use("/api/skills", skillGapRoutes);

const chatbotRoutes = require("./routes/chatbot.routes");
app.use("/api/chat", chatbotRoutes);

const trendsRoutes = require("./routes/trends.routes");
app.use("/api/trends", trendsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
