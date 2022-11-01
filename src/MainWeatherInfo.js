import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function MainWeatherInfo() {
//Current Date
let now = new Date();
let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let hour = `${now.getHours()}`.padStart(2, 0);
let minutes = `${now.getMinutes()}`.padStart(2, 0);
let weekday = weekdays[now.getDay()];

let time = `${hour}:${minutes} ${weekday}`;

let date = now.getDate();
let monthnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let month = `${monthnumbers[now.getMonth()]}`.padStart(2, 0);
let year = now.getFullYear();

let numberdate = `${date}/${month}/${year}`;

//Defining Temperature Variables

  const [temperature, setTemperature] = useState(null);
  const [country, setCountry] = useState(null);
  const [description, setDescription] = useState(null);
  const [windspeed, setWindspeed] = useState(null);
  const [humidity, setHumidity] = useState(null);

//Function that handles the response from the Weather API and sets the values

  function selectResponse(response) {
    setTemperature(Math.round(response.data.temperature.current));
    setCountry(response.data.country);
    setDescription(response.data.condition.description);
    setWindspeed(Math.round(response.data.wind.speed));
    setHumidity(Math.round(response.data.temperature.humidity));
  }

// API Url for Searching a City

  const apiKey = "4a8o8f2236764a9dd8705080tb312695";
  let city = "London";
  let apiUrl =
    `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(selectResponse)

  // Weather App HTML  

  return (
    <div className="MainWeatherInfo">
      <div id="weather-card" className="card">
        <div id="row-top" className="card-body">
          <div id="col-left">
            <div id="numberdate">Date {numberdate}</div>
            <div id="hourday">Time & Weekday {time}</div>
            <div>
              <div id="wind">Wind: {windspeed} %</div>
            </div>
            <div>
              <div id="humidity">Humidity: {humidity}</div>
            </div>
          </div>
          <div id="col-center">
            <span id="element-temperature">Temperature {temperature}</span>
            <span id="element-celsius">C°</span> | 
            <span id="element-farenheit">  F°</span>
            <div id="city">City {city}</div>
            <div id="country">Country {country}</div>
            <div id="state">Description {description}</div>
          </div>
          <div>
            <div id="weather-icon"></div>
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
}
