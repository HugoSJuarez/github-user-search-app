import React from "react";
import Header from "./components/Header";
import UpdateSearch from "./containers/UpdateSearch";
import { ThemeProvider } from "./containers/ThemeContainer";
import "./App.css"

function App() {  
  return (
    <ThemeProvider>
      <div className="app-container">
        <Header />
        <main>
          <UpdateSearch />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
