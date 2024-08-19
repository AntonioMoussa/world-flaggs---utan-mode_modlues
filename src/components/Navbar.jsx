import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
    document.body.classList.toggle('light-mode', isDarkMode);
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="name">
        <Link to="/">The Flag App</Link>
      </div>
      <div className="logo">
        <img
          src={isDarkMode ? "./techover-logo.png" : "./techover-logo-dark.png"}
          alt="Logo"
        />
      </div>
      <button className="theme-toggle" onClick={toggleTheme}>
        <img
          src={isDarkMode ? "./moon.svg" : "./sun.jpg"}
          alt={isDarkMode ? "Dark Mode" : "Light Mode"}
          className="theme-icon"
        />
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </button>
    </nav>
  );
}

export default Navbar;