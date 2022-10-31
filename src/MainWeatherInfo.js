import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function MainWeatherInfo() {
  return (
    <div className="MainWeatherInfo">
      <div id="weather-card" className="card">
        <div id="row-top" className="card-body">
          <div id="col-left">
            <div id="numberdate">Date</div>
            <div id="hourday">Time & Weekday</div>
            <div>
              <div id="wind">Wind:</div>
            </div>
            <div>
              <div id="humidity">Humidity:</div>
            </div>
          </div>
          <div id="col-center">
            <span id="element-temperature">Temperature </span>
            <span id="element-celsius">C°</span> | 
            <span id="element-farenheit">  F°</span>
            <div id="city">City</div>
            <div id="country">Country</div>
            <div id="state">Description</div>
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
                autocomplete="off"
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
