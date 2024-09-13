import React, { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "@mui/system"; 

const getSavedTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme === "dark" ? "dark" : "light"; 
};

const saveThemeToLocalStorage = (theme) => {
  localStorage.setItem("theme", theme);
};

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return getSavedTheme() === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
      saveThemeToLocalStorage("dark");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
      saveThemeToLocalStorage("light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      saveThemeToLocalStorage("dark");
    } else {
      saveThemeToLocalStorage("light");
    }
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      ...(darkMode
        ? {
            primary: {
              main: "#ffffff", 
            },
            background: {
              default: "#202c36",
              paper: "#2B3844",
            },
            text: {
              primary: "#ffffff", 
            },
          }
        : {
            primary: {
              main: "#000000", 
            },
            background: {
              default: "#f2f2f2",
              paper: "#ffffff",
            },
            text: {
              primary: "#000000", 
            },
          }),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <GlobalStyles
        styles={{
          "::-webkit-scrollbar": {
            width: "12px",
          },
          "::-webkit-scrollbar-thumb": {
            backgroundColor:
              theme.palette.mode === "dark" ? "#ffffff" : "#000000", 
            borderRadius: "10px",
            border: `3px solid ${theme.palette.background.default}`, 
          },
          "::-webkit-scrollbar-track": {
            backgroundColor: theme.palette.background.default, 
          },
        }}
      />
      <Router>
        <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:name" element={<CountryPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
