import React from "react";
import './InfoContainer.css';

const octokit = new Octokit({
  auth: process.env.REACT_APP_AUTH_KEY
});

const user = await octokit.request('GET /users/{username}', {
  username: 'octocat',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
});

function InfoContainer(){
    return(
        <div className="user-info-container">

        </div>
    );

}

export default InfoContainer;