import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=1170&auto=format&fit=crop";

    let COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let HOT_URL="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAIN_URL="https://images.unsplash.com/photo-1475116127127-e3ce09ee84e1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";



  return (
    <div className="InfoBox">

      <Card sx={{ maxWidth: 345, borderRadius: 3, boxShadow: 4 }}>
        <CardMedia
          sx={{ height: 180 }}
          image={info.humidity > 80 ? RAIN_URL : info.temp > 14 ? HOT_URL : COLD_URL}
          title="Weather Image"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 14 ? <SunnyIcon/> : <AcUnitIcon/>}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            <b>Temperature:</b> {info.temp}°C  
            <br />
            <b>Feels Like:</b> {info.feels_like}°C  
            <br />
            <b>MinTemp.:</b> {info.tempMin}°C  
            <br />
            <b>MaxTemp.:</b> {info.tempMax}°C  
            <br />
            <b>Humidity:</b> {info.humidity}%
            <p>The whether can be described as <i>{info.weather}</i> 
                and feels like {info.feels_like} &deg;C</p>
          </Typography>
        </CardContent>


      </Card>
    </div>
  );
}


