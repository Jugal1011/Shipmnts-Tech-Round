import React, { useState } from "react";
import "./App.css"

const WeatherInfo = ({ weatherData }) => {
  const [cel, setCel] = useState(false);
  return (
    <div className="weather-info">
      <h2>City Name: {weatherData.location.name}</h2>
      <div>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", gap:"5"}}>
        <img
          src={weatherData.current.condition.icon}
          alt={weatherData.current.condition.text}
        />
        {cel ? (
          <p style={{marginLeft:"10px",marginRight:"10px",fontWeight:"bold"}}>Temperature: {weatherData.current.temp_c}°C</p>
        ) : (
          <p style={{marginLeft:"10px",marginRight:"10px",fontWeight:"bold"}}>Temperature: {weatherData.current.temp_f} F</p>
        )}
        <button  className="btn btn-secondary"  onClick={(e)=>{ e.preventDefault(); setCel(true)}} style={{display: cel ? "none" : ""}} >
        In Celsius
        </button>
        <button  className="btn btn-secondary" onClick={(e)=>{ e.preventDefault(); setCel(false)}} style={{display: cel ? "" : "none"}} >
        In Fahrenheit
        </button>
        </div>
        <p style={{fontWeight:"bold"}}>Current Weather Condition: {weatherData.current.condition.text}</p>
      </div>
    </div>
  );
};

export default WeatherInfo;
