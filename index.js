import dotenv from 'dotenv';
import express from 'express';
import { connectDB } from './config/database.js';
import blog from "./routes/blog.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Mount routes
app.use("/api/v1", blog);

// Default route
app.get("/", (req, res) => {
    res.send("<h1>gekk</h1>");
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});
