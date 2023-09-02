import React from "react";
import { Octokit } from "octokit";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import InfoContainer from "./InfoContainer";

const octokit = new Octokit({
    auth: process.env.REACT_APP_AUTH_KEY
  });
  
const initUser = await octokit.request('GET /users/{username}', {
    username: 'octocat',
    headers: {
        'X-GitHub-Api-Version': '2022-11-28'
    }
});

function UpdateSearch(){
    const [user, setUser] = useState(initUser);
    return(
        <>
            <SearchBar />
            <InfoContainer />
        </>
    );
}

export default UpdateSearch;