import React from "react";

export default function WeatherForecastDay01(props) {

    function day() {
      let date = new Date(props.data.time * 1000);
      let day = date.getDay();

      let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

      return days[day];
    }
    let weatherDataIcon = props.data.condition.icon;
    let weatherIconUrl = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${weatherDataIcon}.png`;
  return (
    <div>
      <div className="weather-forecast-date" id="weather-forecast-date">
        {day()}
      </div>
      <img src={weatherIconUrl} alt="Weather Icon" width="36" id="forecast-weather-icon" />
      <div className="weather-forecast-temperatures">
        <span
          className="weather-forecast-temperature-max"
          id="weather-forecast-temperature-max"
        >
          {Math.round(props.data.temperature.maximum)}°
        </span>{" "}
        <span
          className="weather-forecast-temperature-min"
          id="weather-forecast-temperature-min"
        >
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}
