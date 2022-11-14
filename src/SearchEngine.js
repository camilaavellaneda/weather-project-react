import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

const apiKey = "4a8o8f2236764a9dd8705080tb312695";

export default function SearchEngine(props) {
  const [weatherData, setWeatherData] = useState({
    isReady: false,
    isFetching: false,
  });
  const [isInitialized, setInitialized] = useState(false);
  const [city, setCity] = useState(props.defaultCity);

  function setWeatherDataFromApiResponse(response) {
    let weatherIconData = response.data.condition.icon;
    let weatherIconUrl = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${weatherIconData}.png`;
    console.log("setting new weather data");
    setWeatherData({
      temperature: Math.round(response.data.temperature.current),
      country: response.data.country,
      description: response.data.condition.description,
      windspeed: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.temperature.humidity),
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      weatherIcon: weatherIconUrl,
      isReady: true,
      isFetching: false,
      coordinates: response.data.coordinates,
    });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    axios
      .get(
        `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
      )
      .then(setWeatherDataFromApiResponse);
  }

  function updateWeatherDataFromGeolocation() {
    const apiKey = "4a8o8f2236764a9dd8705080tb312695";

    navigator.geolocation.getCurrentPosition(handlePosition);

    function handlePosition(position) {
      axios
        .get(
          `https://api.shecodes.io/weather/v1/current?lon=${position.coords.longitude}&lat=${position.coords.latitude}&key=${apiKey}&units=metric`
        )
        .then(setWeatherDataFromApiResponse);
    }
  }
  if (!isInitialized) {
    setInitialized(true);
    updateWeatherDataFromGeolocation();
  }

  // Weather App HTML
  if (weatherData.isReady) {
    return (
      <div className="Weatherapp">
        <div id="weather-card" className="card">
          <WeatherInfo data={weatherData} />
          <div id="row-middle">
            <form id="search-form" className="mb-3" onSubmit={handleFormSubmit}>
              <div>
                <input
                  type="search"
                  placeholder="Type a city.."
                  className="form-control"
                  id="search-city-input"
                  autoComplete="off"
                  onChange={(e) => setCity(e.target.value)}
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
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}
