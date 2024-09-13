import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

function Search({ searchTerm, onSearch }) {
  const theme = useTheme();
  return (
    <Box
      className="search-bar"
      sx={{ width: { xs: "100%", md: "40%" }, mb: 2 }} 
    >
      <TextField
        variant="outlined"
        label="Search for a country..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        fullWidth
        sx={{
          input: { color: theme.palette.text.primary },
          label: { color: theme.palette.text.primary },
          borderRadius: "8px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor:
                theme.palette.mode === "dark" ? "#ffffff" : "#202c36",
            },
            "&:hover fieldset": {
              borderColor:
                theme.palette.mode === "dark" ? "#ffffff" : "#202c36",
            },
            "&.Mui-focused fieldset": {
              borderColor:
                theme.palette.mode === "dark" ? "#ffffff" : "#202c36",
            },
          },
        }}
      />
    </Box>
  );
}

export default Search;
