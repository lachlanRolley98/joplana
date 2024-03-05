import React, { createContext, useContext, useState, useEffect } from 'react';
import bronzeImage from '../images/Bronze.png'; // Import the image for bronze
import silverImage from '../images/Silver.png'; // Import the image for bronze
import goldImage from '../images/Gold.png'; // Import the image for bronze
import ironImage from '../images/Iron.png'; // Import the image for bronze
import rustImage from '../images/Rust.png'; // Import the image for bronze
import lightWood from '../images/LightWood.jpg';
import darkWood from '../images/DarkWood.jpg';
import { red } from '@mui/material/colors';


// Define your themes here
const themes = {
  light: {
    background: {
      colour: 'red',
      alternate: {
        backgroundImage: `url(${darkWood})`,
      },
    },
    navbar: '#F0F0F0',
    button: {
      color: 'black',
      alternate1: 'red',
      alternate2: 'orange',
      alternate3: 'yellow',
      alternate4: 'green',
      alternate5: 'blue',
    },
    bigButton: {
      color: 'black'
    }
  },
  dark: {
    background: {
      colour: 'red',
      alternate: {
        backgroundImage: `url(${lightWood})`,
      },
    },
    navbar: '#444444',
    button: {
      color: 'black',
      alternate1: {
        backgroundImage: `url(${rustImage})`, // Bronze background image
        boxShadow: '0px 4px 8px rgba(229, 228, 226, 0.5)', // Platinum color shadow
      },
      alternate2: {
        backgroundImage: `url(${ironImage})`, // Bronze background image
        boxShadow: '0px 4px 8px rgba(184, 115, 51, 0.5)', // Copper color shadow
      },
      alternate3: {
        backgroundImage: `url(${bronzeImage})`, // Bronze background image
        boxShadow: '0px 4px 8px rgba(205, 127, 50, 0.5)', // Bronze color shadow
      },
      alternate4: {
        backgroundImage: `url(${silverImage})`, // Bronze background image
        boxShadow: '0px 4px 8px rgba(192, 192, 192, 0.5)', // Silver color shadow
      },
      alternate5: {
        backgroundImage: `url(${goldImage})`, // Bronze background image
        boxShadow: '0px 4px 8px rgba(255, 215, 0, 0.5)', // Gold color shadow
      },
    },
    bigButton: {
      color: 'indigo'
    }
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
