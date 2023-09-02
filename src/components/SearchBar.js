import React from "react";
import { useState } from "react";
import searchIcon from "../assets/icon-search.svg";
import "./SearchBar.css";

export default function SearchBar({ onSearch, isSearching }) {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <section className="search-box">
      <img className="search-box__icon" src={searchIcon} alt="search icon" />
      <input
        value={text}
        onChange={handleChange}
        className="search-box__input"
        type="text"
        placeholder="Search Github username..."
      />
      <p className="search-box__error--found">No results</p>
      <button
        onClick={() => {
          onSearch(text);
        }}
        className="search-box__btn"
        disabled={isSearching}
      >
        Search
      </button>
    </section>
  );
}
