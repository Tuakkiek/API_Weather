export default function ProvinceSelect({ city, setCity, provinces }) {
  return (
    <div>
      <label>Chọn tỉnh/thành: </label>
      <select value={city} onChange={(e) => setCity(e.target.value)}>
        {provinces.map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </select>
    </div>
  );
}
