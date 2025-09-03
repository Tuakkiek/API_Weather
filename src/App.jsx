import { useState } from "react";
import { fetchWeather } from "./utils/weatherAPI";
import CitySelector from "./components/CitySelector";
import WeatherDisplay from "./components/WeatherDisplay";
import { Header } from "./components/Header/Header";
import { Banner } from "./components/Body/Banner";
import { Footer } from "./components/Footer/Footer";
import { Stack, Container, Box, Button } from "@mui/material";

function App() {
  const [city, setCity] = useState("Hanoi");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    if (city) {
      const data = await fetchWeather(city);
      setWeather(data);
    } else {
      alert("Vui lòng chọn một thành phố hợp lệ.");
    }
  };

  return (
    <>
      <Header />
      <Stack
        spacing={2}
        // sx={{ minHeight: "100vh", display: "flex", flexDirection: "column",}}
      >
        <Banner />
        <Container
          maxWidth={false}
          sx={{
            flexGrow: 1,
            my: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{ p: 3, my: 3, border: "1px solid #e0e0e0", borderRadius: 2 }}
          >
            <Box sx={{ mb: 2 }}>
              <CitySelector
                city={city}
                onCityChange={(e) => setCity(e.target.value)}
              />
            </Box>
            <Button variant="contained" onClick={getWeather} sx={{ mt: 2 }}>
              Xem thời tiết
            </Button>
            {weather && <WeatherDisplay weather={weather} />}
          </Box>
        </Container>
        <Footer />
      </Stack>
    </>
  );
}

export default App;
