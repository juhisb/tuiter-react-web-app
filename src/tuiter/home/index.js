import posts from "./posts.json";
import PostListItem from "./post-list-item";
import "./index.css";

const Home = () => {
    return(
      <ul className="list-group">
         {
        posts.map(post => {
            return(<PostListItem id ={post.id} post={post}/>);
        })
    }
      </ul>
   );
}
export default Home;