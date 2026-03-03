import { Link } from "react-router-dom";
import { posts } from "../mockData/data";

const Blog = () => {
  return (
    <>
      <ul style={{listStyle:"none"}}>
        {posts.map((post) => (
          <li key={post.id} style={{border:"2px solid blue",borderRadius:"10px",marginRight:"50px"}}>
            <Link to={"/blog/" + post.slug}>
                  <h5>{post.title}</h5>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Blog;

//<p>{post.content}</p>