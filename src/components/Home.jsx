import React, { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new Website",
      content: "Lorem ipsum ...",
      author: "mario",
      id: 1,
    },
    {
      title: "Welcome Party",
      content: "Lorem ipsum ...",
      author: "luigi",
      id: 2,
    },
    {
      title: "Web dev top tips",
      content: "Lorem ipsum ...",
      author: "mario",
      id: 3,
    },
  ]);

  return <div className="home">
        <BlogList blogs = {blogs}  title ="All Blogs"/>
  </div>;
};

export default Home;
