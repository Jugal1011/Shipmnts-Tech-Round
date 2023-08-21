import React, { useState } from "react";

const WeatherInfo = ({ weatherData }) => {
  const [cel, setCel] = useState(false);
  return (
    <div className="weather-info">
      <h2>{weatherData.location.name}</h2>
      <div>
        <img
          src={weatherData.current.condition.icon}
          alt={weatherData.current.condition.text}
        />
        {cel ? (
          <p>{weatherData.current.temp_c}°C</p>
        ) : (
          <p>{weatherData.current.temp_f} F</p>
        )}
        <button onClick={(e)=>{ e.preventDefault(); setCel(true)}} style={{display: cel ? "none" : ""}} >
        In Celsius
        </button>
        <button onClick={(e)=>{ e.preventDefault(); setCel(false)}} style={{display: cel ? "" : "none"}} >
        In Fahrenheit
        </button>
        <p>{weatherData.current.condition.text}</p>
      </div>
    </div>
  );
};

export default WeatherInfo;
