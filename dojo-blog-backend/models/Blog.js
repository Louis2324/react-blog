import mongoose from "mongoose";

const BlogSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    author: { type: String, default: "Anonymous" },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog",BlogSchema);
export default Blog;
