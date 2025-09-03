import {cities,API_KEY} from "../utils/constants.js"
import React,{useState} from "react";
function menuDropDown(){
  const [value, setValue] = useState();
  const [data, setData] = useState([]);
  const onChange = async (e) => {
   const selectedCity= setValue(e.target.value);
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},vn&appid=${API_KEY}&units=metric&lang=vi`);
        const result=await response.json();
        setData(result)
    }catch (error){
        console.error("Lỗi khi fetch dữ liệu: ",error)
    }
  };

  return (
    <div className="App">
      <div className="search">
        <div>
          <input type="text" value={value} onChange={onChange} />
          <button>Search</button>
        </div>
        <div className="dropdown-content">
          {value &&
            data
              .filter((cities) => cities.label.startsWith(value))
              .map((cities) => (
                <div key={cities.value} onClick={(e) => setValue(cities.label)}>
                  {cities.label} <hr />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
export default menuDropDown;