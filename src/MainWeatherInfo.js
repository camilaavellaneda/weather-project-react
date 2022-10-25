import React from "react";

export default function MainWeatherInfo() {
  return (
    <div className="MainWeatherInfo">
      <div>Temperature</div>
      <div>
        <span>C°</span>
        <span>F°</span>
      </div>
      <div>City</div>
      <div>Country</div>
      <div>Description</div>
    </div>
  );
}
