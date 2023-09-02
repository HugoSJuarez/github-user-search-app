import React from "react";
import companyIcon from "../assets/icon-company.svg";
import locationIcon from "../assets/icon-location.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import websiteIcon from "../assets/icon-website.svg";
import "./Socials.css";


function Socials({user}){
    
    const location = user.data.location;
    const twitter = user.data.twitter_username;
    const website = user.data.blog;
    const org = user.data.company;

    return(
        <div className="socials-container body1">
            <div className={"social-container__links"+ (location ? '' : " not-available")}>
                <img src={locationIcon} alt="Location Icon"/>
                <p>{location ? location : "Not Available"}</p>
            </div>

            <div className={"social-container__links" + (twitter ? '' : " not-available")}>
                <img src={twitterIcon} alt="Twitter Icon"/>
                <p>{twitter ? twitter : "Not Available"}</p>
            </div>

            <div className={"social-container__links"+ (website ? '' : " not-available")}>
                <img src={websiteIcon} alt="Website Icon"/>
                <p>{website ?
                        <a href={website}>{website}</a>
                    :
                    "Not Available"
                    }
                </p>
            </div>

            <div className={"social-container__links" + (org ? '' : " not-available")}>
                <img src={companyIcon} alt="Company Icon"/>
                <p>{org ? org : "Not Available"}</p>
            </div>
        </div>
    );

}

export default Socials;