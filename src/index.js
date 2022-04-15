import React from "react";
import ReactDOM from "react-dom";
import WeatherSearch from "./WeatherSearch";
import WeatherForcast from "./WeatherForecast";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
      <WeatherForcast />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

//import reportWebVitals from './reportWebVitals';

//ReactDOM.render(
 // <React.StrictMode>
   // <App />
  //</React.StrictMode>,
  //document.getElementById('root')
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
