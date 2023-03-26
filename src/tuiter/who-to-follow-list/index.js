import {useSelector} from "react-redux";
import WhoToFollowListItem from "./who-to-follow-list-item.js";

const WhoToFollowList = () => {
    const whoArray = useSelector(
        (state) => state.who);
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