import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny'; 
import OpacityIcon from '@mui/icons-material/Opacity'; 
import ThermometerIcon from '@mui/icons-material/Thermostat'; 
import AirIcon from '@mui/icons-material/Air'; 
import VisibilityIcon from '@mui/icons-material/Visibility'; 
import CompressIcon from '@mui/icons-material/Compress'; 
import ThermostatIcon from '@mui/icons-material/Thermostat';

const WeatherInfo = ({ weather }) => {
  if (!weather || !weather.main || !weather.wind) {
    return null;
  }

  const { main, wind, visibility } = weather;

  const pressure = main.pressure || 'N/A';
  const visibilityKm = visibility ? `${visibility / 1000} km` : 'N/A';
  const windSpeed = wind.speed ? `${(wind.speed * 3.6).toFixed(2)} km/h` : 'N/A';
  const uvIndex = 'N/A'; 

  return (
    <Box sx={{ p: 2, border: '1px solid #e0e0e0', borderRadius: 2, mt: 2 }}>
      <Grid container spacing={2} justifyContent="space-around">
        <Grid item xs={4} sm={2} sx={{ textAlign: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ThermostatIcon color="primary" sx={{ fontSize: 40 }} />
            <Typography variant="body2" color="text.secondary">Thấp/Cao</Typography>
            <Typography variant="body1">{main.temp_min}°/{main.temp_max}°</Typography>
          </Box>
        </Grid>

        <Grid item xs={4} sm={2} sx={{ textAlign: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <OpacityIcon color="primary" sx={{ fontSize: 40 }} />
            <Typography variant="body2" color="text.secondary">Độ ẩm</Typography>
            <Typography variant="body1">{main.humidity}%</Typography>
          </Box>
        </Grid>

        <Grid item xs={4} sm={2} sx={{ textAlign: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CompressIcon color="primary" sx={{ fontSize: 40 }} />
            <Typography variant="body2" color="text.secondary">Áp suất</Typography>
            <Typography variant="body1">{pressure} hPa</Typography>
          </Box>
        </Grid>

        <Grid item xs={4} sm={2} sx={{ textAlign: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <VisibilityIcon color="primary" sx={{ fontSize: 40 }} />
            <Typography variant="body2" color="text.secondary">Tầm nhìn</Typography>
            <Typography variant="body1">{visibilityKm}</Typography>
          </Box>
        </Grid>

        <Grid item xs={4} sm={2} sx={{ textAlign: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <AirIcon color="primary" sx={{ fontSize: 40 }} />
            <Typography variant="body2" color="text.secondary">Gió</Typography>
            <Typography variant="body1">{windSpeed}</Typography>
          </Box>
        </Grid>

        <Grid item xs={4} sm={2} sx={{ textAlign: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <WbSunnyIcon color="primary" sx={{ fontSize: 40 }} />
            <Typography variant="body2" color="text.secondary">UV</Typography>
            <Typography variant="body1">{uvIndex}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WeatherInfo;