import express from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { upload } from "../middlewares/multer.js";
import {
  allBlogs,
  createBlog,
  deleteBlog,
  userBlogs,
  editBlog,
} from "../controllers/blog.controller.js";

const router = express.Router();

// Create
router.post("/create", isAuthenticated, upload.single("image"), createBlog);

// Read
router.get("/all", allBlogs);
router.get("/user/blogs", isAuthenticated, userBlogs);

// Update
router.put("/edit/:id", isAuthenticated, upload.single("image"), editBlog); // ✅ fixed here

// Delete
router.delete("/delete/:id", isAuthenticated, deleteBlog);

export default router;
