import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { IconButton } from "@mui/material";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ UpdateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "313f9a1717c75955e6effe713ccce49f";

  let getWeatherInfo = async (city) => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      console.log(jsonResponse);

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelslike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = async (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo(city);
      UpdateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="searchBox">
          <TextField
            id="city"
            label="City or Airport"
            variant="outlined"
            required
            value={city}
            onChange={handleChange}
            sx={{
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused": {
                  borderColor: "purple", // Change outline color
                },
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "purple", // Change label color
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="search" type="submit">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        {error && <p style={{ color: "red" }}>No such place exits!</p>}
      </form>
    </div>
  );
}
