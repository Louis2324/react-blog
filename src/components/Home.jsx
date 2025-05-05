import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/blogs/")
      .then((res) => {
        if (!res.ok) {
          throw Error("Couldn't fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsPending(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setIsPending(false);
      });
  }, []);

  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isPending && <div className="loading"> Loading...</div>}
      {!isPending && blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
