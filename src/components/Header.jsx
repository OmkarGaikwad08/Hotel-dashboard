import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { FiSun, FiCloud, FiCloudRain, FiCloudSnow, FiWind, FiAlertTriangle } from "react-icons/fi";

const WEATHER_API_KEY = "2f01beec6440cce3424b103592b29c20"; // Replace this with your API key
const UNITS = "metric";

const getWeatherIcon = (weatherMain) => {
  switch (weatherMain) {
    case "Clear":
      return <FiSun />;
    case "Clouds":
      return <FiCloud />;
    case "Rain":
      return <FiCloudRain />;
    case "Snow":
      return <FiCloudSnow />;
    case "Mist":
    case "Haze":
    case "Fog":
      return <FiWind />;
    default:
      return <FiCloud />;
  }
};

function Header() {
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState(null);
  const [locationAccess, setLocationAccess] = useState(false);

  const getWeather = async (lat, lon) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=${UNITS}`
      );
      const data = await res.json();
      if (res.ok) {
        setWeather({
          temp: data.main.temp,
          desc: data.weather[0].description,
          main: data.weather[0].main,
          city: data.name,
        });
        setLocationAccess(true);
      } else {
        console.error("Weather API error:", data);
        setLocationAccess(false);
      }
    } catch (err) {
      console.error("Failed to fetch weather:", err);
      setLocationAccess(false);
    }
  };

  const requestLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          getWeather(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.warn("Location access denied:", error.message);
          setLocationAccess(false);
        }
      );
    } else {
      console.warn("Geolocation is not supported by this browser.");
      setLocationAccess(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    requestLocation();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-0">
      <div className="flex-1 min-w-0 mt-4">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-none">
          {format(time, "h:mm a")}
        </p>
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-1 sm:mt-2 truncate">
          Welcome back, Sateesh!
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-1 opacity-90">
          {format(time, "eeee, MMMM do yyyy")}
        </p>
      </div>
      <div className="text-left lg:text-right flex-shrink-0 w-full lg:w-auto">
        {weather && locationAccess ? (
          <div className="space-y-1">
            <p className="flex items-center justify-start lg:justify-end text-base sm:text-lg md:text-xl font-medium space-x-2">
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">{getWeatherIcon(weather.main)}</span>
              <span>{weather.city}</span>
            </p>
            <p className="text-sm sm:text-base md:text-lg capitalize opacity-90">
              {weather.desc} | {weather.temp}°C
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center lg:items-end space-y-2">
            <div className="flex items-center space-x-2 text-red-300">
              <FiAlertTriangle className="text-xl sm:text-2xl" />
              <p className="text-sm sm:text-base">Weather unavailable</p>
            </div>
            <button
              onClick={requestLocation}
              className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-600 transition"
            >
              Allow Location Access
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
