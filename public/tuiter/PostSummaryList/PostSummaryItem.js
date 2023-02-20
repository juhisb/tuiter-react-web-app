
const PostSummaryItem = (post, page) => {return(`
<li class="list-group-item">
                <div class="row">
                    <div class=${page === "explore"? "col-sm-10" : "col-sm-9"}>
                        <p class="mb-0 text-secondary">${post.topic}</p>
                        <p class="mb-0"><strong>${post.userName} </strong> <i class="fa fa-check-circle"></i> <span class="text-secondary">- ${post.time}</span></p>
                        <p class="mb-0"><strong>${post.title}</strong></p>
                    </div>
                    <div class=${page === "explore"? "col-sm-2" : "col-sm-3"}>
                        <img class= "wd-content-img rounded mx-auto d-block" src=${post.image}>
                    </div>
                </div>
            </li>
`);
    };
export default PostSummaryItem;