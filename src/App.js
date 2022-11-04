import "./App.css";
import React from "react";
import MainWeatherInfo from "./MainWeatherInfo";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <MainWeatherInfo defaultCity="Berlin"/>
      <footer>
        This project was coded by Camila Avellaneda and is{" "}
        <a
          href="https://github.com/camilaavellaneda/weather-project-react"
          target={"_blank"}
          className="author"
          no-referrer="true"
        >
          open-sourced on Github
        </a>
      </footer>
    </div>
  );
}
