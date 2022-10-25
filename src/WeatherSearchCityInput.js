import React, { useState } from "react";
import axios from 'axios';

export default function WeatherSearchCityInput() {

  let [city, setCity] = useState("");
  let [weatherResult, setWeatherResult] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);
  let apiKey = `97c2f6a3b34509ac62090edc5d18d949`;

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(apiCall);
    function apiCall(response) {
      setTemperature(Math.round(response.data.main.temp));
      setDescription(response.data.weather[0].description);
      setHumidity(Math.round(response.data.main.humidity));
      setWind(Math.round(response.data.wind.speed));
      setIcon(
        `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      );
    }
    setWeatherResult();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <input type="search" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      {temperature && (
        <div>
          <ul>
            <li>Temperature: {temperature}°C</li>
            <li>Description: {description}</li>
            <li>Humidity: {humidity}%</li> <li>Wind: {wind} km/hr</li>
            <li>
              Icon:<img src={icon}></img>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

