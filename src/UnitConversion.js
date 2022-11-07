import React, { useState } from "react";

export default function UnitConversion(props) {
  const [unit, setUnit] = useState("defaultCelsius");
  function convertFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function farenheitTemp() {
    return (props.defaultCelsius * 9) / 5 + 32;
  }

  function convertCelsius(event) {
    event.preventDefault();
    setUnit("defaultCelsius");
  }
  if (unit === "defaultCelsius") {
    return (
      <div>
        <span id="element-temperature">
          {Math.round(props.defaultCelsius)} {"  "}
        </span>
        <span id="element-celsius">C°</span> |{" "}
        <span  onClick={convertFarenheit} id="element-farenheit">
          {" "}
          F°
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span id="element-temperature">
          {farenheitTemp()} {"  "}
        </span>
        <span id="element-celsius">
          <span onClick={convertCelsius}>°C</span>
        </span>{" "}
        |{" "}
        <span  id="element-farenheit">
          {" "}
          F°
        </span>
      </div>
    );
  }
}
