import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/connectionDB.js";
import userRoutes from "./routes/user.routes.js";
import blogRoutes from "./routes/blog.routes.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;
// middlewares
app.use(express.json());
app.use(cors());
// API ENDPOINTS
app.use("/images", express.static("uploads"));
app.use("/user", userRoutes);
app.use("/blog", blogRoutes);



app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
