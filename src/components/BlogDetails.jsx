import { useParams, useNavigate } from "react-router-dom";
import useAxios from "./useAxios";
import API from "../api/Axios.jsx";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useAxios(`blogs/${id}`);

  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await API.delete(`blogs/${blog._id}`);
      navigate("/");
    } catch (err) {
      console.err("Failed to delete : ", err.message);
    }
  };
  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <div>{blog.body}</div>
          <small>Written by {blog.author.name}</small>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
