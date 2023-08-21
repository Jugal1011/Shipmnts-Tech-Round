import React, { useState } from 'react';
import './App.css';
import WeatherInfo from './WeatherInfo';

const apiKey = '563020b92ab040a197261521232108'; // Replace with your API key from weatherapi.com

function WeatherApp() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = () => {
    if (city.trim() === '') {
      alert('Please enter a city name');
      return;
    }

    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
      .then(response => response.json())
      .then(data => setWeatherData(data))
      .catch(error => {
        console.error('Error fetching weather data:', error);
        setWeatherData(null);
      });
  };

  return (
    <div>
    <h1>Weather App</h1>
    <div className="weather-container">
      
      <input
        type="text"
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleSearch}>Search</button>
      
      {weatherData!== null && (
        <WeatherInfo weatherData={weatherData}/>
      )}
      {weatherData===null && (
        <p>No weather data available</p>
      )}
    </div>
    </div>
  );
}

export default WeatherApp;
