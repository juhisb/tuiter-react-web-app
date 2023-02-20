const PostListItem = (post) => {return(`
<li class="list-group-item wd-post">
                <div class="row">
                    <div class="col-sm-2">
                    <img class= "wd-content-img rounded-circle mx-auto d-block" src=${post.icon}>
                    </div>
                    <div class="col-sm-10">
                        <p class="mb-0"><strong>${post.userName}  </strong>  <i class="fa fa-check-circle"></i> <span class="text-secondary">@${post.handle} - ${post.time}</span> <i class="fa-solid fa-ellipsis float-end text-secondary"></i></p>
                        <p class="mb-1">${post.tuit}</p>
                        <div class="border border-secondary wd-banner mb-2">
                        <img src=${post.image} class="w-100 wd-banner">
                        <div class="container border-top border-secondary pt-2 ${post.title === '' ? "d-none": ""}">
                        <p class="mb-0">${post.title}</p>
                        <p class="mb-0 text-secondary">${post.summary}</p>
                        <p class="mb-0 text-secondary"><i class="fa fa-link"></i> ${post.link}</p>
                        </div>
              
                        </div>
                        <div class="d-flex justify-content-between">
                        <a href = "#" class="text-secondary text-decoration-none"><i class="fa-regular fa-comment"></i> <span>${post.comments}</span></a>
                        <a href = "#" class="text-secondary text-decoration-none"><i class="fa fa-retweet"></i> <span>${post.retweets}</span></a>
                        <a href = "#" class="text-secondary text-decoration-none"><i class="fa-regular fa-heart"></i> <span>${post.likes}</span></a>
                        <a href = "#" class="text-secondary text-decoration-none"><i class="fa-solid fa-arrow-up-from-bracket"></i><span> </span></a>
                        </div>
                    </div>
                </div>
            </li>
`);
};
export default PostListItem;