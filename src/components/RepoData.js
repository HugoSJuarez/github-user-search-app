import React from "react";
import "./RepoData.css"

function RepoData({user}){
    return(
        <div className="repo-info-container">
            <div className="repo-infor-container__data">
                <p className="body1">
                    Repos
                </p>
                <h2 className="number">
                    {user.data.public_repos}
                </h2>
            </div>

            <div className="repo-infor-container__data">
                <p className="body1">
                    Followers
                </p>
                <h2 className="number">
                    {user.data.followers}
                </h2>
            </div>

            <div className="repo-infor-container__data">
                <p className="body1">
                    Following
                </p>
                <h2 className="number">
                    {user.data.following}
                </h2>
            </div>
        </div>
    );
}

export default RepoData;