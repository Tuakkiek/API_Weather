export default function WeatherInfo({ weather }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>{weather.name}</h3>
      <p><b>Nhiệt độ:</b> {weather.main.temp} °C</p>
      <p><b>Trạng thái:</b> {weather.weather[0].description}</p>
      <p><b>Độ ẩm:</b> {weather.main.humidity}%</p>
      <p><b>Tốc độ gió:</b> {weather.wind.speed} m/s</p>
    </div>
  );
}
