import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
const {data :blogs ,isPending,error} = useFetch("http://localhost:4000/api/blogs/");

  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isPending && <div className="loading"> Loading...</div>}
      {!isPending && blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;