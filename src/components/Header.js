import React from "react";
import moon from "../assets/icon-moon.svg"
import "./Header.css";

export default function Header(){
    return(
        <header>
            <h1 className="company-name">devFinder</h1>
            <p className="theme-color">Dark <img className="theme-color__img" src={moon} alt="dark-mode"/></p>
        </header>
    );
}