import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = (page) => {
    return(`
      <ul class="list-group">
         ${
        posts.map(post => {
            return(PostSummaryItem(post, page));
        }).join('')
    }
      </ul>
   `);
}
export default PostSummaryList;