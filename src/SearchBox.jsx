import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "5c054d8cf1697b85c848a1d6acab95d2";

  let getWeatherInfo = async () => {
    let respose = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonRespose = await respose.json();
    let result = {
      city: city,
      temp: jsonRespose.main.temp,
      tempMin: jsonRespose.main.temp_min,
      tempMax: jsonRespose.main.temp_max,
      humidity: jsonRespose.main.humidity,
      feelsLike: jsonRespose.main.feels_like,
      weather: jsonRespose.weather[0].description,
    };
    console.log(result);
    return result;
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };
  let handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log(city);
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
  };
  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
