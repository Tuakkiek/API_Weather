const API_KEY = "022bc4eb98ba2192d16fa8286ed17a2f";

  
export async function fetchWeather(city) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},vn&appid=${API_KEY}&units=metric&lang=vi`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Lỗi khi gọi API thời tiết");
  }
}