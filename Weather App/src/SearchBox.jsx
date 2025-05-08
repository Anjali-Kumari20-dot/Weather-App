import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import "./SearchBox.css";
import { useState } from "react";


export default function SearchBox() {
  let [city, setCity] = useState("");

  let handleChange = (event) => {
    setCity(event.target.value);
  }

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(city);
    setCity("");
  }

  return (
    <div>
      <h3>Search for a city or airport</h3>
      <form action="" onSubmit={handleSubmit}>
        <div className="searchBox">
          <TextField
            id="city"
            label="City or Airport"
            variant="outlined"
            required value={city}
            onChange={handleChange}
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
      </form>
    </div>
  );
}
