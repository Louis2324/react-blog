import React from "react";
import { Link } from "react-router-dom";

const BlogList = (props) => {
  const { blogs, title } = props;
  return (
    <div className="blog-list">
      <h2 className="blog-title">{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>{blog.bodygi}</p>
            <small>Written by {blog.author}</small>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
