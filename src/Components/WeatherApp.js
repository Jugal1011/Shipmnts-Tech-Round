import React, { useState } from "react";
import "./App.css";
import WeatherInfo from "./WeatherInfo";

const apiKey = "563020b92ab040a197261521232108"; // Replace with your API key from weatherapi.com

function WeatherApp() {
  const [city, setCity] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = () => {
    setIsSubmit(true);
    const errors = validate(city);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          setIsSubmit(false);
          setFormErrors({});
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
          setWeatherData(null);
        });
    }
  };
  const [err, setErr] = useState(false);

  const validate = (city) => {
    const errors = {};

    if (city.trim() === "") {
      errors.CityName = "City Name is required";
      setErr(true);
    } else {
      setErr(false);
    }
    return errors;
  };

  const validClass =
    err && isSubmit ? "form-control is-invalid" : "form-control";

  return (
    <div>
      <h1 className="mb-5 mt-5">Weather App</h1>
      <div className="weather-container">
        {/* <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        /> */}
        <div className="row">
        <div className="form-floating mb-3 col-10  ">
          <input
            type="text"
            className={validClass}
            placeholder="City Name"
            id="rolefloatingInput"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          {isSubmit && <p className="text-danger">{formErrors.CityName}</p>}

          <label htmlFor="role-field" className="form-label">  Type City Name Here...</label>
        </div>
        <div className="col-2" style={{display:"flex", flexDirection:"column", justifyContent:"start", alignItems:"center",verticalAlign:"middle"}}>
        <button className="btn btn-primary" onClick={handleSearch}>Search</button>
        </div>
        </div>

        {weatherData !== null && <WeatherInfo weatherData={weatherData} />}
        {weatherData === null && <pre style={{margin:"auto",width:"45%", marginTop:"70px"}}>       No Weather Data Available</pre>} 
      </div>
    </div>
  );
}

export default WeatherApp;
