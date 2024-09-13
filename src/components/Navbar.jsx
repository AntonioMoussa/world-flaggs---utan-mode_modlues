import React from "react";
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

function Navbar({ toggleTheme, darkMode }) {
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: darkMode ? "#2B3844" : "#FFF",
        color: darkMode ? "#FFF" : "#000",
        width: "100%",
        left: 0,
        padding: 0,
        boxSizing: "border-box",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ paddingLeft: "20px", paddingRight: "20px" }}
      >
        <Toolbar
          disableGutters
          className="navbar-content"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              color: "inherit",
              textDecoration: "none",
            }}
            className="navbar-title"
          >
            The Flag App
          </Typography>

          <Box
            sx={{
              flex: 1,
              textAlign: "center",
              display: { xs: "none", md: "block" },
            }}
          >
            <img
              src={
                darkMode ? "./techover-logo.png" : "./techover-logo-dark.png"
              }
              alt="TechOver Logo"
              style={{ height: 24 }}
              className="techover-logo"
            />
          </Box>

          <Button
            onClick={toggleTheme}
            startIcon={darkMode ? <Brightness7 /> : <Brightness4 />}
            sx={{
              color: "inherit",
              textTransform: "none",
              minWidth: "auto",
            }}
            className="navbar-theme-button"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;

