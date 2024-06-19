import SearchBox from "./SearchBox";
import InfoBox from "./infobox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 44.64,
    humidity: 33,
    temp: 40.05,
    tempMax: 40.05,
    tempMin: 40.05,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo)
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox information={weatherInfo} />
    </div>
  );
}
