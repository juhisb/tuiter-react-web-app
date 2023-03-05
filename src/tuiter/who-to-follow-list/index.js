import whoArray from "./who.json";
import WhoToFollowListItem from "./who-to-follow-list-item.js";

const WhoToFollowList = () => {
    return(
      <ul className="list-group">
    <li className="list-group-item"><span className="fw-bold">Who to follow</span></li>
          {
              whoArray.map(who =>
                  <WhoToFollowListItem
                      key={who.id}
                      who={who}/>
              )
          }
      </ul>
   );
}
export default WhoToFollowList;