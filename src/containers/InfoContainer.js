import React from "react";
import PersonalData from "../components/PersonalData";
import RepoData from "../components/RepoData";
import Socials from "../components/Socials";
import './InfoContainer.css';


function InfoContainer({user}){
    return(
        <section className="user-info-container">
            <img className="user-info-container__img" src={user.data.avatar_url} alt="User profile"/>
            <div className="user-info-container__text">
                <PersonalData user={user}/>
                <RepoData user={user}/>
                <Socials user={user} />
            </div>
        </section>
    );

}

export default InfoContainer;