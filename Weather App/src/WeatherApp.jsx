import "./WeatherApp.css";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "WonderLand",
    feelslike: 24.84,
    humidity: 51,
    temp: 30.05,
    tempMax: 30.05,
    tempMin: 30.05,
    weather: "haze",
  });

  let UpdateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  }

  return (
    <div className="box">
      <h2>Sky Watch: Your Weather Hub</h2>
      <SearchBox UpdateInfo={UpdateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
