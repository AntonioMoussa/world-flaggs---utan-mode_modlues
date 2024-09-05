import React, { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";

function Dropdown({ regions, onSelectRegion }) {
  const [selectedRegion, setSelectedRegion] = useState("");
  const isDarkMode = document.body.classList.contains("dark-mode");

  const handleChange = (event) => {
    setSelectedRegion(event.target.value);
    onSelectRegion(event.target.value);
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "50%", lg: "25%" },
        mb: 2,
        maxWidth: "100%",
      }}
    >
      <FormControl fullWidth>
        <InputLabel sx={{ color: isDarkMode ? "#FFF" : "inherit" }}>
          Region
        </InputLabel>
        <Select
          value={selectedRegion}
          onChange={handleChange}
          label="Region"
          sx={{
            color: isDarkMode ? "#FFF" : "inherit",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: isDarkMode ? "#FFF" : "inherit",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: isDarkMode ? "#FFF" : "inherit",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: isDarkMode ? "#FFF" : "inherit",
            },
            "& .MuiSvgIcon-root": {
              color: isDarkMode ? "#FFF" : "inherit",
            },
          }}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>

          {regions.map((region) => (
            <MenuItem key={region} value={region}>
              {region}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default Dropdown;
