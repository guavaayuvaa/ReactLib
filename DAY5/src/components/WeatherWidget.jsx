
import { useState } from "react";
import axios from "axios";

const WeatherWidget = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isCelsius, setIsCelsius] = useState(true); 
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
      );
      setWeather(response.data);
    } catch (err) {
      setError("City not found or API error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const toggleUnit = () => setIsCelsius((prev) => !prev);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl">
      <h1 className="text-2xl font-bold mb-4 text-center">Weather Widget</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter city"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          onClick={fetchWeather}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-blue-500 text-center">Loading...</p>}

      {error && <p className="text-red-500 text-center">{error}</p>}

      {weather && (
        <div className="mt-6 p-4 bg-blue-100 rounded-xl text-center">
          <h2 className="text-xl font-semibold">
            {weather.location.name}, {weather.location.country}
          </h2>
          <p className="text-lg capitalize">
            {weather.current.condition.text}
          </p>
          <img
            src={weather.current.condition.icon}
            alt={weather.current.condition.text}
            className="mx-auto my-2"
          />
          <p className="text-3xl font-bold">
            {isCelsius
              ? `${weather.current.temp_c}°C`
              : `${weather.current.temp_f}°F`}
          </p>

          <button
            onClick={toggleUnit}
            className="mt-4 bg-white text-blue-600 border border-blue-600 px-4 py-1 rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
            Show in °{isCelsius ? "F" : "C"}
          </button>
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;
