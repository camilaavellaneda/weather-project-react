import "./App.css";
import React from "react";
import SecondaryWeatherInfo from "./SecondaryWeatherInfo";
import MainWeatherInfo from "./MainWeatherInfo";
import WeatherSearchCityInput from "./WeatherSearchCityInput"

export default function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <SecondaryWeatherInfo />
      <MainWeatherInfo />
      <WeatherSearchCityInput />
      <footer>
        This project was coded by Camila Avellaneda and is{" "}
        <a
          href="https://github.com/camilaavellaneda/weather-project-react"
          no-referrer
        >
          open sourced on Github
        </a>
      </footer>
    </div>
  );
}
