import { API_KEY } from "./constants";

export const fetchWeather = async (city) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},vn&appid=${API_KEY}&units=metric&lang=vi`
    );
    const data = await res.json();
    if (data.cod === 200) {
      return data;
    } else {
      alert("Không tìm thấy dữ liệu cho thành phố này!");
      return null;
    }
  } catch (err) {
    console.error(err);
    alert("Lỗi khi lấy dữ liệu!");
    return null;
  }
};