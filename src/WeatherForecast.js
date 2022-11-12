import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay01 from "./WeatherForecastDay01";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  console.log("running WeatherForecast", props);
  console.log("is loaded:", loaded);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function callForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div id="weather-forecast" className="row align-items-start">
        {forecast.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div className="col-2" key={index}>
                <WeatherForecastDay01 data={dailyForecast} />
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    console.log("Fetching weather data");
    //  console.log(props);
    const apiKey = "4a8o8f2236764a9dd8705080tb312695";
    let latitude = props.coordinates.latitude;
    let longitude = props.coordinates.longitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(callForecast);

    return null;
  }
}
