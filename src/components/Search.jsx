import React from 'react';
import TextField from '@mui/material/TextField';

function Search({ searchTerm, onSearch }) {
  return (
    <TextField
      variant="outlined"
      label="Search for a country..."
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      fullWidth
      sx={{
        marginBottom: '20px',
        input: {
          color: 'inherit',
        },
        label: {
          color: 'inherit',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'inherit',
          },
          '&:hover fieldset': {
            borderColor: 'inherit',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'inherit',
          },
        },
      }}
    />
  );
}

export default Search;