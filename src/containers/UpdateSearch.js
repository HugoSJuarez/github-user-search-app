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
console.log("Run init now");

function UpdateSearch(){
    const [user, setUser] = useState(initUser);
    const [state, setState] = useState("found");
    console.log("User", user);
    let isSearching = false;
    let error = false;

    async function handleSearch(value){

        setState("searching");
        try{
            const newUser = await octokit.request('GET /users/{username}', {
                username: value,
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            });
            setUser(newUser);
            setState("found");
        }
        catch(e){
            setState("error");
        }
    }

    switch(state){
        case "searching":
            isSearching=true;
            error = false;
            break;
        case "found":
            isSearching=false;
            break;
        case "error":
            isSearching=false;
            error=true;
            break;
        default:
            throw new Error("This shouldnt happen");
    }

    return(
        <>
            <SearchBar isSearching={isSearching} onSearch={handleSearch} error={error}/>
            <InfoContainer user={user}/>
        </>
    );
}

export default UpdateSearch;