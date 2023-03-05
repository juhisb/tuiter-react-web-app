import React from "react";
const PostListItem = ({post}) => {return(
<li className="list-group-item wd-post">
                <div className="row">
                    <div className="col-sm-2">
                    <img height={70} className= "rounded-circle mx-auto d-block" src={`/images/${post.icon}`}/>
                    </div>
                    <div className="col-sm-10">
                        <p className="mb-0"><strong>{post.userName}  </strong>  <i className="bi-check-circle-fill"></i> <span className="text-secondary">@{post.handle} - {post.time}</span> <i className="fa-solid fa-ellipsis float-end text-secondary"></i></p>
                        <p className="mb-1">{post.tuit}</p>
                        <div className="border border-secondary wd-banner mb-2">
                        <img src={`/images/${post.image}`} className="w-100 wd-banner" />
                        <div className={`container border-top border-secondary pt-2 ${post.title === '' ? "d-none": ""}`}>
                        <p className="mb-0">{post.title}</p>
                        <p className="mb-0 text-secondary">{post.summary}</p>
                        <p className="mb-0 text-secondary"><i className="fa fa-link"></i> {post.link}</p>
                        </div>
              
                        </div>
                        <div className="d-flex justify-content-between">
                        <a href = "#" className="text-secondary text-decoration-none"><i className="bi-chat"></i> <span>{post.comments}</span></a>
                        <a href = "#" className="text-secondary text-decoration-none"><i className="bi-repeat"></i> <span>{post.retweets}</span></a>
                        <a href = "#" className="text-secondary text-decoration-none"><i className="bi-heart"></i> <span>{post.likes}</span></a>
                        <a href = "#" className="text-secondary text-decoration-none"><i className="bi-arrow-up-square"></i><span> </span></a>
                        </div>
                    </div>
                </div>
            </li>
);
};
export default PostListItem;