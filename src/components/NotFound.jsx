import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Not Found</h2>
      <p>That specified page can not be found</p>
      <Link to="/"> Go back Home 😅😅 ...?</Link>
    </div>
  );
};

export default NotFound;
