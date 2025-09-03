import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { cities } from '../utils/constants';

const CitySelector = ({ city, onCityChange }) => {
  const selectedCity = cities.find(c => c.value === city);

  return (
    <Autocomplete
      options={cities}
      getOptionLabel={(option) => option.label}
      value={selectedCity}
      onChange={(e, newValue) => {
        if (newValue) {
          onCityChange({ target: { value: newValue.value } });
        } else {
          onCityChange({ target: { value: '' } });
        }
      }}
      renderInput={(params) => (
        <TextField 
          {...params} 
          label="Chọn tỉnh/thành" 
          variant="outlined"
        />
      )}
      isOptionEqualToValue={(option, value) => option.value === value.value}
      noOptionsText="Không tìm thấy thành phố"
    />
  );
};

export default CitySelector;