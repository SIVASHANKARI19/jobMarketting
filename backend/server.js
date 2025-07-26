const express = require("express");
const app = express();

app.use(express.json());

const userRoutes = require("./routes/user.routes");
app.use("/api/users",userRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
    
})