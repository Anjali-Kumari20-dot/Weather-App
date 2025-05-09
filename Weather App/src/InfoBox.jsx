import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SunnyIcon from "@mui/icons-material/Sunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";


export default function InfoBox({ info }) {
  let INIT_URL =
    "https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3D";
  const HOT_URL =
    "https://images.unsplash.com/photo-1682687218608-5e2522b04673?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3D";

  return (
    <div className="InfoBox">
      <Card sx={{ maxWidth: {xs: "90vw", sm: 500}, overflow: "hidden" , boxShadow: "none", border: "none"  }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <CardMedia
          sx={{ height: {xs: 150, sm: 200}, width: "100%", borderRadius: 6}}
          image={
            info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL
          }
          title="green iguana"
        />
        <CardContent sx={{ backgroundColor: "purple", color: "white", marginTop: 2, borderRadius: 6, padding: {xs: 2, sm: 3}}} >
          <Typography gutterBottom variant="h5" component="div">
            {info.city} &nbsp; &nbsp;
            {info.humidity > 80
              ? <ThunderstormIcon/>
              : info.temp > 15
              ? <SunnyIcon />
              : <AcUnitIcon />}
          </Typography>
          <Typography variant="body2" sx={{ backgroundColor: "purple", color: "white" }}>
            <p>Temperature = {info.temp}</p>
            <p>Humidity = {info.humidity} </p>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>Max Temp = {info.tempMax}&deg;C</p>
            <p>
              Weather can be described as <i>{info.weather}</i> and the weather
              feels Like = {info.feelslike}
            </p>
          </Typography>
        </CardContent>
        </Box>
      </Card>
    </div>
  );
}
