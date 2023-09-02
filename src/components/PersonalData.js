import React from "react";
import "./PersonalData.css";

function PersonalData({user}) {
  
  const creationDate=getDateFormated(user);
  
  return (
    <div className="personal-data">
      <div className="personal-data__title">
        <h1>{user.data.name}</h1>
        <p className="body2">Joined {creationDate}</p>
      </div>
      <p className="personal-data__username">
        <a href={user.data.html_url}>@{user.data.login}</a>
      </p>
      <p className="body1">
        {user.data.bio ? user.data.bio : "This profile has no bio"}
      </p>
    </div>
  );
}

export default PersonalData;


function getDateFormated(user){
  const options = { day: 'numeric', month: 'short', year: 'numeric'};
  const date = new Date(user.data.created_at);
  return date.toLocaleDateString("en-GB", options);
};