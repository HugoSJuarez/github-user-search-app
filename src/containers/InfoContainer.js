import React from "react";
import { Octokit } from "octokit";
import PersonalData from "../components/PersonalData";
import RepoData from "../components/RepoData";
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

console.log(user);

function InfoContainer(){
    return(
        <section className="user-info-container">
            <img className="user-info-container__img" src={user.data.avatar_url} alt="User profile"/>
            <div className="user-info-container__text">
                <PersonalData />
                <RepoData />
            </div>
        </section>
    );

}

export default InfoContainer;