import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
  useMediaQuery,
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md")); // Använd media query för att kolla storleken

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
        zIndex: 1100,
      }}
    >
      <Container maxWidth="md" sx={{ px: 0 }}>
        <Toolbar sx={{ justifyContent: "space-between", px: 2 }}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ color: "inherit", textDecoration: "none" }}
          >
            The Flag App
          </Typography>

          {isLargeScreen && (
            <Box
              sx={{
                flexGrow: 1,
                textAlign: "center",
              }}
            >
              <img
                src={
                  isDarkMode
                    ? "./techover-logo.png"
                    : "./techover-logo-dark.png"
                }
                alt="Logo"
                style={{ height: 24 }}
              />
            </Box>
          )}

          <Button
            onClick={toggleTheme}
            startIcon={isDarkMode ? <Brightness7 /> : <Brightness4 />}
            sx={{
              color: "inherit",
              textTransform: "none",
            }}
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
