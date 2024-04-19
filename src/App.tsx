import React from "react";
import SearchBar from "./components/SearchBar";
import "./css/App.css";
import CardGrid from "./components/CardGrid";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome To The Movie App </h1>
      </header>
      <CardGrid></CardGrid>
    </div>
  );
}

export default App;
