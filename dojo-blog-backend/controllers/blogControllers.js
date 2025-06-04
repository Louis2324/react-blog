import Blog from "../models/Blog.js";

export const getAllBlogs = async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.status(200).json(blogs);
};

export const getBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) return res.status(404).json({ msg: "Blog not found" });
  res.status(200).json(blog);
};

export const createBlog = async (req, res) => {
  const blog = new Blog(req.body);
  await blog.save();
  res.status(201).json(blog);
};

export const updateBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if(!blog) return res.status(404).json({msg:"Not Found"});
  blog.title = req.body.title || blog.title;
  blog.body = req.body.body || blog.body;
  await blog.save();
  res.status(200).json(blog);
};

export const deleteBlog = async (req, res) => {
  const blog = await Blog.findByIdAndDelete(req.params.id);
  if (!blog) return res.status(404).json({ msg: "Blog Not Found" });
  res.status(200).json({ message: "Blog deleted" });
};
