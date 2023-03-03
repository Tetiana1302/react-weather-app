import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="clear-sky-day" size={40} />
          <div className="Weatherforecast-temperature">
            <span className="WeatherForecast-temperature-max">19º</span>
            <span className="WeatherForecast-temperature-min">10º</span>
          </div>
        </div>
      </div>
    </div>
  );
}