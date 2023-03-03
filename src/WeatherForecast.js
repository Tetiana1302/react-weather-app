import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "o48dd36dfc3tf24e84630b557c7a96f0";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

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
