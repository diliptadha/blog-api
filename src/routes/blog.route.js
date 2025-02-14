import { Router } from "express";
import {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  addComment,
} from "../controllers/blog.controller.js";
import { validateBlog } from "../middleware/validation.js";

const router = Router();

router.get("/", getAllBlogs);

router.get("/:id", getBlogById);

router.post("/", validateBlog, createBlog);

router.post("/:id/comment", addComment);

router.put("/:id", validateBlog, updateBlog);

router.delete("/:id", deleteBlog);

export default router;
