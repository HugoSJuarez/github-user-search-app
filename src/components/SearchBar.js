import React from "react";
import searchIcon from "../assets/icon-search.svg"
import "./SearchBar.css"

export default function SearchBar() {
    return(
        <div className="search-box">
            <img className="search-box__icon" src={searchIcon} alt="search icon"/>
            <input className="search-box__input" type="text" placeholder="Search Github username..."/>
            <button className="search-box__btn">Search</button>
        </div>
    );
}