import  { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Anonymous");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);
    setTimeout(() => {
      fetch("http://localhost:4000/api/blogs/", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(blog),
      }).then(() => {
        console.log("New Blog Added");
        setIsPending(false);
        navigate("/");
      });
    }, 1000);
  };
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor=""> Blog title: </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label htmlFor=""> Blog Body: </label>
        <textarea
          required
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>

        <label htmlFor="">Author: </label>
        <select
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option value="mario">mario</option>
          <option value="luigi">luigi</option>
        </select>
        {!isPending && <button>Add Blog </button>}
        {isPending && <button disabled> Adding Blog... </button>}
      </form>
    </div>
  );
};

export default Create;
