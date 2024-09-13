import React, { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

function Dropdown({ regions, onSelectRegion }) {
  const theme = useTheme();
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleChange = (event) => {
    setSelectedRegion(event.target.value);
    onSelectRegion(event.target.value);
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "30%" },
        maxWidth: "200px",
        mb: 2,
        mt: "-12px",
      }}
    >
      <FormControl fullWidth sx={{ height: "40px" }}>
        <InputLabel
          sx={{
            color: theme.palette.text.primary,
          }}
        >
          Region
        </InputLabel>
        <Select
          value={selectedRegion}
          onChange={handleChange}
          label="Region"
          sx={{
            color: theme.palette.text.primary,
            height: "55px", // Behåll höjden
            padding: "0",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor:
                theme.palette.mode === "dark" ? "#ffffff" : "#202c36",
            },
            "& .MuiSvgIcon-root": {
              color: theme.palette.text.primary,
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
