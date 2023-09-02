import React from "react";
import "./RepoData.css"

function RepoData(){
    return(
        <div className="repo-info-container">
            <div className="repo-infor-container__data">
                <p className="body1">
                    Repos
                </p>
                <h2 className="number">
                    8
                </h2>
            </div>

            <div className="repo-infor-container__data">
                <p className="body1">
                    Followers
                </p>
                <h2 className="number">
                    3938
                </h2>
            </div>

            <div className="repo-infor-container__data">
                <p className="body1">
                    Following
                </p>
                <h2 className="number">
                    9
                </h2>
            </div>
        </div>
    );
}

export default RepoData;