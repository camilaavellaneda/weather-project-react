import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

const apiKey = "4a8o8f2236764a9dd8705080tb312695";

export default function MainWeatherInfo(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

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

  // Weather App HTML
  if (weatherData.ready) {
    return (
      <div className="MainWeatherInfo">
        <div id="weather-card" className="card">
          <div id="row-top" className="card-body">
            <div id="col-left">
              <div id="numberdate"></div>
              <div id="hourday">
                <FormattedDate date={weatherData.date} />
              </div>
              <div>
                <div id="wind">Wind: {weatherData.windspeed} km/hr</div>
              </div>
              <div>
                <div id="humidity">Humidity: {weatherData.humidity}% </div>
              </div>
            </div>
            <div id="col-center">
              <span id="element-temperature">
                {weatherData.temperature} {"  "}
              </span>
              <span id="element-celsius">C°</span> |
              <span id="element-farenheit"> F°</span>
              <div id="city">{weatherData.city}</div>
              <div id="country">{weatherData.country}</div>
              <div id="state">{weatherData.description}</div>
            </div>
            <div id="col-right">
              <div id="weather-icon">
                <img src={weatherData.weatherIcon} alt="Icon of Weather" />
              </div>
            </div>
          </div>
          <div id="row-middle">
            <form id="search-form" className="mb-3">
              <div>
                <input
                  type="search"
                  placeholder="Type a city.."
                  className="form-control"
                  id="search-city-input"
                  autoComplete="off"
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
          <div id="weather-forecast" className="row card-body">
            <div className="row">
              <div className="col-2">
                <div
                  className="weather-forecast-date"
                  id="weather-forecast-date"
                ></div>
                <img src="" alt="" width="36" id="forecast-weather-icon" />
                <div className="weather-forecast-temperatures">
                  <span
                    className="weather-forecast-temperature-max"
                    id="weather-forecast-temperature-max"
                  ></span>
                  <span
                    className="weather-forecast-temperature-min"
                    id="weather-forecast-temperature-min"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    axios
      .get(
        `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`
      )
      .then(selectResponse);

    return <h1>Loading...</h1>;
  }
}
