import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

const apiKey = "4a8o8f2236764a9dd8705080tb312695";

export default function SearchEngine(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function selectResponse(response) {
    let weatherIconData = response.data.condition.icon;
    let weatherIconUrl = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${weatherIconData}.png`;
    setWeatherData({
      temperature: Math.round(response.data.temperature.current),
      country: response.data.country,
      description: response.data.condition.description,
      windspeed: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.temperature.humidity),
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      weatherIcon: weatherIconUrl,
      ready: true,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchAttribute();
  }

  function handleSearchCity(event) {
    setCity(event.target.value);
  }

  function searchAttribute() {
        axios
          .get(
            `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
          )
          .then(selectResponse);

  }


  // Weather App HTML
  if (weatherData.ready) {
    return (
      <div className="Weatherapp">
        <div id="weather-card" className="card">
        <WeatherInfo data={weatherData} />
          <div id="row-middle">
            <form id="search-form" className="mb-3" onSubmit={handleSubmit}>
              <div>
                <input
                  type="search"
                  placeholder="Type a city.."
                  className="form-control"
                  id="search-city-input"
                  autoComplete="off"
                  onChange={handleSearchCity}
                />
              </div>
              <div>
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                  id="button-addon2"
                />
              </div>
            </form>
          </div>
          <WeatherForecast />
        </div>
      </div>
    );
  } else {
    searchAttribute();
    return <h1>Loading...</h1>;
  }
}
