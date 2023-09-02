import React from "react";
import { Octokit } from "octokit";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar"
import "./App.css"

const octokit = new Octokit({
  auth: process.env.REACT_APP_AUTH_KEY
});

const user = await octokit.request('GET /users/{username}', {
  username: 'octocat',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
});

function App() {  
  return (
    <div className="app-container">
      <Header />
      <main>
        <SearchBar />
      </main>
    </div>
  );
}

export default App;
