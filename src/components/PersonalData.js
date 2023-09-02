import React from "react";
import "./PersonalData.css";

function PersonalData() {
  return (
    <div className="personal-data">
      <div className="personal-data__title">
        <h1>The Octocat</h1>
        <p className="body2">Joined 25 Jan 2011</p>
      </div>
      <p className="personal-data__username">
        <a href="#">@octocat</a>
      </p>
      <p className="body1">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros.
      </p>
    </div>
  );
}

export default PersonalData;
