import React from "react";
import companyIcon from "../assets/icon-company.svg";
import locationIcon from "../assets/icon-location.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import websiteIcon from "../assets/icon-website.svg";
import "./Socials.css";


function Socials(){

    return(
        <div className="socials-container body1">
            <div className="social-container__links">
                <img src={locationIcon} alt="Location Icon"/>
                <p>San Francisco</p>
            </div>

            <div className="social-container__links not-available">
                <img src={twitterIcon} alt="Twitter Icon"/>
                <p>Not Available</p>
            </div>

            <div className="social-container__links">
                <img src={websiteIcon} alt="Website Icon"/>
                <p><a href="#">https://github.blog</a></p>
            </div>

            <div className="social-container__links">
                <img src={companyIcon} alt="Company Icon"/>
                <p>@github</p>
            </div>
        </div>
    );

}

export default Socials;