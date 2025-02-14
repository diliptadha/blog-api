import blogs from "../blogData.js";
import { v4 as uuidv4 } from "uuid";

const getAllBlogs = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const paginatedblogs = blogs.slice(startIndex, endIndex);

  return res.status(200).json({
    success: true,
    blogs: paginatedblogs,
    page,
    limit,
    totalblogs: blogs.length,
    totalPages: Math.ceil(blogs.length / limit),
  });
};

const getBlogById = (req, res) => {
  const blog = blogs.find((p) => p.id === req.params.id);
  if (!blog) {
    return res.status(404).json({ success: false, message: "blog not found" });
  }
  return res.status(200).json({
    success: true,
    blog,
  });
};

const createBlog = (req, res) => {
  const newblog = {
    id: uuidv4(),
    title: req.body.title,
    content: req.body.content,
    comments: [],
  };
  blogs.push(newblog);
  return res.status(201).json({
    success: true,
    blog: newblog,
  });
};

const updateBlog = (req, res) => {
  const blogIndex = blogs.findIndex((p) => p.id === req.params.id);
  if (blogIndex === -1) {
    return res.status(404).json({ success: false, message: "blog not found" });
  }
  blogs[blogIndex] = { ...blogs[blogIndex], ...req.body };
  return res.status(200).json({ success: true, updatedblog: blogs[blogIndex] });
};

const deleteBlog = (req, res) => {
  const blogIndex = blogs.findIndex((p) => p.id === req.params.id);
  if (blogIndex === -1) {
    return res.status(404).json({ success: false, message: "blog not found" });
  }
  blogs.splice(blogIndex, 1);
  return res
    .status(200)
    .send({ success: true, message: "blog deleted successfully" });
};

const addComment = (req, res) => {
  const blogIndex = blogs.findIndex((p) => p.id === req.params.id);
  if (blogIndex === -1 || !req.body.comment) {
    return res
      .status(404)
      .json({ success: false, message: "blog or comment not found" });
  }
  blogs[blogIndex].comments.push(req.body.comment);
  return res.status(200).json({
    success: true,
    blog: blogs[blogIndex],
  });
};

export {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  addComment,
};
