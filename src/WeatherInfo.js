import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo (props) {
    return (
      <div id="row-top" className="card-body">
        <div id="col-left">
          <div id="numberdate"></div>
          <div id="hourday">
            <FormattedDate date={props.data.date} />
          </div>
          <div>
            <div id="wind">Wind: {props.data.windspeed} km/hr</div>
          </div>
          <div>
            <div id="humidity">Humidity: {props.data.humidity}% </div>
          </div>
        </div>
        <div id="col-center">
          <span id="element-temperature">
            {props.data.temperature} {"  "}
          </span>
          <span id="element-celsius">C°</span> |
          <span id="element-farenheit"> F°</span>
          <div id="city">{props.data.city}</div>
          <div id="country">{props.data.country}</div>
          <div id="state">{props.data.description}</div>
        </div>
        <div id="col-right">
          <div id="weather-icon">
            <img src={props.data.weatherIcon} alt="Icon of Weather" />
          </div>
        </div>
      </div>
    );
}