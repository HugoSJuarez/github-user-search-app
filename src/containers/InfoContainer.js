import React from "react";
import PersonalData from "../components/PersonalData";
import RepoData from "../components/RepoData";
import Socials from "../components/Socials";
import './InfoContainer.css';


function InfoContainer(){
    return(
        <section className="user-info-container">
            <img className="user-info-container__img" src="" alt="User profile"/>
            <div className="user-info-container__text">
                <PersonalData />
                <RepoData />
                <Socials />
            </div>
        </section>
    );

}

export default InfoContainer;