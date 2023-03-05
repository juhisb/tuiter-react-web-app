import React from "react";
const WhoToFollowListItem = ({who}) => {
    return(
    <li className="list-group-item">
        <div className="row">
            <div className="col-lg-2 col-xl-2">
                <img src={`/images/${who.avatarIcon}`}
                     height={48}  className=" rounded-circle" alt="..."/>
            </div>
            <div className="col-lg-6 col-xl-7">
                <div className="text-nowrap">
                    <h6 className="mt-0 mb-0">{who.userName} <i className="bi-check-circle-fill"></i></h6>
                    <p className="mb-0">@{who.handle}</p>
                </div>
            </div>
            <div className="col-lg-4 col-xl-3">
                <button type="button" className="btn btn-primary rounded-pill w-100">Follow</button>
            </div>
        </div>
    </li>
    );
};

export default WhoToFollowListItem;

