import React,{useState} from "react";




function Api(){
const[cityInput, setCityInput] = useState("");
const [suggest, setSuggest] = useState([]);
const[weather, setWeather] = useState(null);

const onChange=(e) =>{
  
}

  const API_KEY = "022bc4eb98ba2192d16fa8286ed17a2f";

   const getWeather = async () => {
    const normalizedCity = normalizeCityName(cityInput);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          normalizedCity
        )},vn&appid=${API_KEY}&units=metric&lang=vi`
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
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <label>Nhập tên tỉnh/thành: </label>
      <input
        type="text"
        value={cityInput}
        onChange={(e) => setCityInput(e.target.value)}
        placeholder="VD: ho chi minh, ha noi, da nang..."
        style={{ padding: "8px", width: "250px", marginRight: "10px" }}
      />

      <button onClick={getWeather} style={{ padding: "8px 16px" }}>
        Xem thời tiết
      </button>

      {weather && (
        <div style={{ marginTop: "20px" }}>
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