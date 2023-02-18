import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project is created by Tetiana Bysykalo and is{" "}
          <a
            href="https://github.com/Tetiana1302/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sorced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
