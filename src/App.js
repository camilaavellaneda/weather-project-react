import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import SearchEngine  from "./SearchEngine";

export default function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <SearchEngine defaultCity="Berlin" />
      <footer>
        This project was coded by Camila Avellaneda and is{" "}
        <a
          href="https://github.com/camilaavellaneda/weather-project-react"
          target={"_blank"}
          className="author"
          rel="noreferrer"
        >
          open-sourced on Github
        </a>
      </footer>
    </div>
  );
}
