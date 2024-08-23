import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box, Button, Container } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
    document.body.classList.toggle('light-mode', isDarkMode);
  };

  return (
    <AppBar
      position="fixed" // Ser till att navbaren alltid är längst upp
      sx={{
        backgroundColor: isDarkMode ? '#2B3844' : '#FFF', // Mörkgrå för dark mode, vit för light mode
        color: isDarkMode ? '#FFF' : '#000', // Vit text i dark mode, svart text i light mode
      }}
    >
      <Container maxWidth="md"> {/* Begränsar bredden på innehållet */}
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Vänster sektion: App-namn */}
          <Typography variant="h6" component={Link} to="/" sx={{ color: 'inherit', textDecoration: 'none' }}>
            The Flag App
          </Typography>

          {/* Centrerad logga */}
          <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
            <img
              src={isDarkMode ? './techover-logo.png' : './techover-logo-dark.png'}
              alt="Logo"
              style={{ height: 24 }}
            />
          </Box>

          {/* Höger sektion: Tema-knapp */}
          <Button
            onClick={toggleTheme}
            startIcon={isDarkMode ? <Brightness7 /> : <Brightness4 />}
            sx={{
              color: 'inherit',
              marginLeft: 'auto',
              textTransform: 'none', // För att förhindra att texten blir versal
            }}
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;