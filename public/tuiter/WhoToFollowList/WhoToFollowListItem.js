const WhoToFollowListItem = (who) => {
    return(`
    <li class="list-group-item">
        <div class="row">
            <div class="col-lg-2 col-xl-2">
                <img src="../../images/${who.avatarIcon}"
                     class="wd-follow-img rounded-circle" alt="...">
            </div>
            <div class="col-lg-6 col-xl-7">
                <div class="text-nowrap">
                    <h6 class="mt-0 mb-0">${who.userName} <i class="fa fa-check-circle"></i></h6>
                    <p class="mb-0">@${who.handle}</p>
                </div>
            </div>
            <div class="col-lg-4 col-xl-3">
                <button type="button" class="btn btn-primary rounded-pill w-100">Follow</button>
            </div>
        </div>
    </li>
   `
    );
}
export default WhoToFollowListItem;

