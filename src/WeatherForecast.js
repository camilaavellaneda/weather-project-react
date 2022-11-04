import React from "react";

export default function WeatherForecast() {
    return (
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
    );
}