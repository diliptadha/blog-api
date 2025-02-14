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
import { checkUserlogin } from "../middleware/checkAuth.js";

const blogRouter = Router();

blogRouter.get("/", getAllBlogs);

blogRouter.get("/:id", getBlogById);

blogRouter.post("/", validateBlog, checkUserlogin, createBlog);

blogRouter.post("/:id/comment", checkUserlogin, addComment);

blogRouter.put("/:id", validateBlog, checkUserlogin, updateBlog);

blogRouter.delete("/:id", checkUserlogin, deleteBlog);

export default blogRouter;
