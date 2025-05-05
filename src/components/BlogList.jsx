import React from "react";

const BlogList = (props) => {
  const { blogs, title } = props;
  return (
    <div className="blog-list">
      <h2 className="blog-title">{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <small>Written by {blog.author}</small>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
