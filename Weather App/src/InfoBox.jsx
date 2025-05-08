import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css"

export default function InfoBox() {
  let INIT_URL = "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  let info = {
    city: "Delhi",
    feelslike: 24.84,
    humidity: 51,
    temp: 30.05,
    tempMax: 30.05,
    tempMin: 30.05,
    weather: "haze",
  };
  return (
    <div className="InfoBox">
      <h1>Weather Info</h1>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={INIT_URL}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
             <p>Temperature = {info.temp}</p>
             <p>Humidity = {info.humidity} </p>
             <p>Min Temp = {info.tempMin}&deg;C</p>
             <p>Max Temp = {info.tempMax}&deg;C</p>
             <p>Weather can be described as <i>{info.weather}</i>  and the weather feels Like = {info.feelslike}</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
