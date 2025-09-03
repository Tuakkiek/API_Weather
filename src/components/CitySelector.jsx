import React from "react";
import { cities } from "../utils/constants";

const CitySelector = ({ city, onCityChange }) => {
  return (
    <div>
      <label>Chọn tỉnh/thành: </label>
      <select value={city} onChange={onCityChange}>
        {cities.map((p) => (
          <option key={p.value} value={p.value}>
            {p.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitySelector;