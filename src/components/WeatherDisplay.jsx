import React from 'react';
import { Box, Typography } from '@mui/material'; // Import các component cần thiết
import WeatherInfo from './WeatherInfo'; // Import component WeatherInfo mới

const WeatherDisplay = ({ weather }) => {
  return (
    <Box 
      sx={{ 
        p: 2, 
        border: '1px solid #e0e0e0', // Định dạng viền
        borderRadius: 2, // Bo góc
        bgcolor: '#f5f5f5', // Màu nền
  
      }}
    >
      <Typography variant="h5" gutterBottom>
        Thời tiết {weather.name}
      </Typography>

      <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
        {weather.main.temp}°C
      </Typography>
      
      <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
        Trạng thái: {weather.weather[0].description}
      </Typography>
      
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Cảm giác như: {weather.main.feels_like}°C
      </Typography>

      <WeatherInfo weather={weather} />
    </Box>
  );
};

export default WeatherDisplay;