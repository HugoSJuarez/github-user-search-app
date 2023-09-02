import React from "react";
import Header from "./components/Header";
import UpdateSearch from "./containers/UpdateSearch";
import "./App.css"

function App() {  
  return (
    <div className="app-container">
      <Header />
      <main>
        <UpdateSearch />
      </main>
    </div>
  );
}

export default App;
