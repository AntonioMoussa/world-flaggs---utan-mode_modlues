import React, { useState, useEffect } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

function Dropdown({ regions, onSelectRegion }) {
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleChange = (event) => {
    setSelectedRegion(event.target.value);
    onSelectRegion(event.target.value);
  };

  return (
    <FormControl fullWidth sx={{ minWidth: 120, marginBottom: '20px' }}>
      <InputLabel>Region</InputLabel>
      <Select
        value={selectedRegion}
        onChange={handleChange}
        label="Region"
        sx={{
          color: 'inherit',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'inherit',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'inherit',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'inherit',
          },
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {regions.map((region) => (
          <MenuItem key={region} value={region}>
            {region}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Dropdown;