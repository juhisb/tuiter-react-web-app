import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return(`
      <ul class="list-group">
    <li class="list-group-item"><span class="fw-bold">Who to follow</span></li>
         ${
        who.map(w => {
            return(WhoToFollowListItem(w));
        }).join('')
    }
      </ul>
   `);
}
export default WhoToFollowList;