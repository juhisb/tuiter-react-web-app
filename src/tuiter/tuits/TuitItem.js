import React from "react";
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";

const TuitItem = ({post}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return (
        <div className="list-group-item">
            <div className="row">
        <div className="col-sm-2">
        <img height={60} className= "rounded-circle mx-auto d-block" src={`/images/${post.image}`}/>
        </div>
        <div className="col-sm-10">
            <i className="bi bi-x-lg float-end"
               onClick={() => deleteTuitHandler(post._id)}></i>
            <p className="mb-0"><strong>{post.userName}  </strong>  <i className="bi bi-patch-check-fill wd-check-mark"></i> <span className="text-secondary">{post.handle} - {post.time}</span> <i className="fa-solid fa-ellipsis float-end text-secondary"></i></p>
        <p className="mb-1">{post.tuit}</p>
        {/*<div className="wd-author-tuit wd-border">*/}
        {/*    <span className="wd-author-avatar"><img src={`../images/${post.image}`} /></span>*/}
        {/*    <div className="wd-tuit-body">*/}
        {/*        <div className="wd-author-name"> {post.userName} </div>*/}
        {/*        <span><i className="bi bi-patch-check-fill wd-check-mark"></i></span>*/}
        {/*        <span className="wd-author-handle"> {post.handle} &#183; {post.time}</span>*/}
        {/*        <i className="bi bi-x-lg float-end"*/}
        {/*           onClick={() => deleteTuitHandler(post._id)}></i>*/}
        {/*        <div className="wd-tuit-content">*/}
        {/*            {post.tuit}*/}
        {/*        </div>*/}
        {/*    </div>*/}
            <TuitStats post={post}/>
        </div>
            </div>
        </div>
    )
};

export default TuitItem;