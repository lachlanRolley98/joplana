import React, { createContext, useContext, useState, useEffect } from 'react';

// Define your themes here
const themes = {
  light: {
    background: '#FFFFFF',
    navbar: '#F0F0F0',
    button: {
      color: 'red',
      alternate: 'green',
      alternate2: 'orange',
    },
  },
  dark: {
    background: '#333333',
    navbar: '#444444',
    button: {
      color: 'gold',
      alternate: 'silver',
      alternate2: 'purple',
    },
  },
};

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // Attempt to read the theme from localStorage right away
  const getInitialTheme = () => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      return storedTheme ? storedTheme : 'light'; // Default to 'light' if nothing is stored
    }
    return 'light'; // Default to 'light' if window is not defined (e.g., during server-side rendering)
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Save theme to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  // The value provided to the context consumers
  const contextValue = {
    theme,
    setTheme,
    themes,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
