import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
   <>
   <div className={`list-group`}>
        <a className={`list-group-item list-group-item-action`}><i className={`bi-twitter`}></i></a>
        <Link to="/tuiter/home" className={`list-group-item list-group-item-action ${active === "home" ? "active" : ""}`}> <i className={`bi-house-fill`}></i> <span className={`d-none d-xl-inline-block d-xxl-inline-block`}> Home </span></Link>
            <Link to="/tuiter/explore" className={`list-group-item list-group-item-action ${active === "explore" ? "active" : ""}`}> <i className={`bi-hash`}></i> <span className={`d-none d-xl-inline-block d-xxl-inline-block`}> Explore</span> </Link>
       <Link to="/" className="list-group-item">
           Labs
       </Link>
       <a  className={`list-group-item list-group-item-action ${active === "notifications" ? "active" : ""}`}> <i className={`bi-bell-fill`}></i> <span className={`d-none d-xl-inline-block d-xxl-inline-block`}>Notifications </span></a>

            <a  className={`list-group-item list-group-item-action ${active === "messages" ? "active" : ""}`}> <i className={`bi-envelope-fill`}></i> <span className={`d-none d-xl-inline-block d-xxl-inline-block`}>Messages </span></a>

            <a  className={`list-group-item list-group-item-action ${active === "bookmarks" ? "active" : ""}`}><i className={`bi-bookmark-fill`}></i> <span className={`d-none d-xl-inline-block d-xxl-inline-block`}> Bookmarks</span> </a>

            <a  className={`list-group-item list-group-item-action ${active === "lists" ? "active" : ""}`}><i className={`bi-list`}></i> <span className={`d-none d-xl-inline-block d-xxl-inline-block`}>Lists</span> </a>

            <a  className={`list-group-item list-group-item-action ${active === "profile" ? "active" : ""}`}> <i className={`bi-person-fill`}></i> <span className={`d-none d-xl-inline-block d-xxl-inline-block`}>Profile</span> </a>
        <a  className={`list-group-item list-group-item-action ${active === "more" ? "active" : ""}`}>
            <span className={`fa-layers fa-fw fa-lg wd-more`}>
                <FontAwesomeIcon icon ={faCircle} className={`fa-stack-1x wd-more-circle`}></FontAwesomeIcon>
                <FontAwesomeIcon icon ={faEllipsisH} className={`fa-stack-1x fa-inverse wd-more-ellipsis`}></FontAwesomeIcon>
            </span> <span className={`d-none d-xl-inline-block d-xxl-inline-block`}>More </span></a>

    </div>
    <div>
    <button type="button" className={`btn btn-primary rounded-pill w-100 mt-2`}>Tuit</button>
    </div>
    </>
 );
}
export default NavigationSidebar;

