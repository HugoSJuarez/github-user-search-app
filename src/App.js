import React from "react";
import { Octokit } from "octokit";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import InfoContainer from "./containers/InfoContainer";
import "./App.css"

function App() {  
  return (
    <div className="app-container">
      <Header />
      <main>
        <SearchBar />
        <InfoContainer />
      </main>
    </div>
  );
}

export default App;
