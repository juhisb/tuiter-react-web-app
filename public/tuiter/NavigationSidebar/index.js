const NavigationSidebar = (active) => {
    return(`
   <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action"><i class="fab fa-twitter"></i></a>
        <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action ${active === "home" ? "active": ""}"> <i class="fa-solid fa-house-chimney"></i> <span class="d-none d-xl-inline-block d-xxl-inline-block"> Home </span></a>
            <a href="../ExploreScreen/index.html" class="list-group-item list-group-item-action ${active === "explore" ? "active" : ""}"> <i class="fa fa-hashtag"></i> <span class="d-none d-xl-inline-block d-xxl-inline-block"> Explore</span> </a>

            <a href="notifications.html" class="list-group-item list-group-item-action ${active === "notifications" ? "active" : ""}"> <i class="fa fa-bell"></i> <span class="d-none d-xl-inline-block d-xxl-inline-block">Notifications </span></a>

            <a href="messages.html" class="list-group-item list-group-item-action ${active === "messages" ? "active" : ""}"> <i class="fa fa-envelope"></i> <span class="d-none d-xl-inline-block d-xxl-inline-block">Messages </span></a>

            <a href="bookmarks/index.html" class="list-group-item list-group-item-action ${active === "bookmarks" ? "active" : ""}"><i class="fa  fa-bookmark"></i> <span class="d-none d-xl-inline-block d-xxl-inline-block"> Bookmarks</span> </a>

            <a href="lists.html" class="list-group-item list-group-item-action ${active === "lists" ? "active" : ""}"><i class="fa fa-list"></i> <span class="d-none d-xl-inline-block d-xxl-inline-block">Lists</span> </a>

            <a href="profile.html" class="list-group-item list-group-item-action ${active === "profile" ? "active" : ""}"> <i class="fa fa-user"></i> <span class="d-none d-xl-inline-block d-xxl-inline-block">Profile</span> </a>
        <a href="#" class="list-group-item list-group-item-action ${active === "more" ? "active" : ""}">
            <span class="fa-stack wd-more">
                <i class="fa fa-circle fa-stack-1x wd-more-circle"></i>
                <i class="fa fa-ellipsis-h fa-stack-1x fa-inverse wd-more-ellipsis"></i>
            </span> <span class="d-none d-xl-inline-block d-xxl-inline-block">More </span></a>

    </div>
    <div>
    <button type="button" class="btn btn-primary rounded-pill w-100 mt-2">Tuit</button>
    </div>
 `);
}
export default NavigationSidebar;

