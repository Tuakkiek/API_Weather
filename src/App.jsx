import { useState } from "react";

const cities = [
  { value: "Hanoi", label: "Hà Nội" },
  { value: "Ho Chi Minh", label: "TP. Hồ Chí Minh" },
  { value: "Da Nang", label: "Đà Nẵng" },
  { value: "Can Tho", label: "Cần Thơ" },
  { value: "Hue", label: "Huế" },
  { value: "Nha Trang", label: "Nha Trang" },
  { value: "Da Lat", label: "Đà Lạt" },
];

function App() {
  const [city, setCity] = useState("Hanoi");
  const [weather, setWeather] = useState(null);

  const API_KEY = "022bc4eb98ba2192d16fa8286ed17a2f";

  const getWeather = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},vn&appid=${API_KEY}&units=metric&lang=vi`
      );
      const data = await res.json();
      if (data.cod === 200) {
        setWeather(data);
      } else {
        setWeather(null);
        alert("Không tìm thấy dữ liệu cho thành phố này!");
      }
    } catch (err) {
      console.error(err);
      alert("Lỗi khi lấy dữ liệu!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <label>Chọn tỉnh/thành: </label>
      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
      >
        {cities.map((p) => (
          <option key={p.value} value={p.value}>
            {p.label}
          </option>
        ))}
      </select>

      <button onClick={getWeather}>Xem thời tiết</button>

      {weather && (
        <div>
          <h3>{weather.name}</h3>
          <p>
            <b>Nhiệt độ:</b> {weather.main.temp} °C
          </p>
          <p>
            <b>Trạng thái:</b> {weather.weather[0].description}
          </p>
          <p>
            <b>Độ ẩm:</b> {weather.main.humidity}%
          </p>
          <p>
            <b>Tốc độ gió:</b> {weather.wind.speed} m/s
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
