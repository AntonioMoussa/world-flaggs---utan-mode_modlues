import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = useTheme();

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
    document.body.classList.toggle("light-mode", isDarkMode);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: isDarkMode ? "#2B3844" : "#FFF",
        color: isDarkMode ? "#FFF" : "#000",
        width: "100vw",
        left: 0,
        padding: 0,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ paddingLeft: "20px", paddingRight: "20px" }}
      >
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                color: "inherit",
                textDecoration: "none",
              }}
            >
              The Flag App
            </Typography>
          </Box>

          <Box
            sx={{
              flex: 1,
              textAlign: "center",
              display: { xs: "none", md: "block" },
            }}
          >
            <img
              src={
                isDarkMode ? "./techover-logo.png" : "./techover-logo-dark.png"
              }
              alt="Logo"
              style={{ height: 24 }}
            />
          </Box>

          <Box sx={{ flex: 1, textAlign: "right" }}>
            <Button
              onClick={toggleTheme}
              startIcon={isDarkMode ? <Brightness7 /> : <Brightness4 />}
              sx={{
                color: "inherit",
                textTransform: "none",
                padding: 2,
                minWidth: "auto",
              }}
            >
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;

