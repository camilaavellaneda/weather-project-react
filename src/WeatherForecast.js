import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay01 from "./WeatherForecastDay01";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  let [isFetching, setFetching] = useState(false);
  console.log("running WeatherForecast", props);
  console.log("is loaded:", loaded);

  function fetchForecast() {
    console.log("Fetching weather data");
    //  console.log(props);
    const apiKey = "4a8o8f2236764a9dd8705080tb312695";
    let latitude = props.coordinates.latitude;
    let longitude = props.coordinates.longitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;
    setFetching(true);
    axios.get(apiUrl).then(setForecastFromApiResponse);
  }
  useEffect(() => {
    fetchForecast();
    // eslint-disable-next-line
  }, [props.coordinates]);

  function setForecastFromApiResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    setFetching(false);
  }
  if (loaded) {
    return (
      <div id="position-forecast">
        <div id="weather-forecast" className="row align-items-start">
          {forecast.slice(0, 5).map(function (dailyForecast, index) {
            return (
              <div className="col-2" key={index}>
                <WeatherForecastDay01 data={dailyForecast} />
              </div>
            );
          })}
        </div>
        {isFetching && <div id="updating-forecast">Updating Forecast</div>}
      </div>
    );
  } else {
    return null;
  }
}
