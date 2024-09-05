import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

function Search({ searchTerm, onSearch }) {
  const isDarkMode = document.body.classList.contains("dark-mode");

  return (
    <Box
      className="search-bar"
      sx={{ width: { xs: "100%", md: "60%" }, mb: 2 }}
    >
      <TextField
        variant="outlined"
        label="Search for a country..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        fullWidth
        sx={{
          input: { color: isDarkMode ? "#FFF" : "inherit" }, // Text color
          label: { color: isDarkMode ? "#FFF" : "inherit" }, // Label color
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: isDarkMode ? "#FFF" : "#000", // Border color based on mode
            },
            "&:hover fieldset": {
              borderColor: isDarkMode ? "#FFF" : "#000", // Border color on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: isDarkMode ? "#FFF" : "#000", // Border color on focus
            },
          },
        }}
      />
    </Box>
  );
}

export default Search;
