import { React } from 'react';
import Button from '@mui/material/Button';
import { useTheme } from './ThemeContext'; // Path to your useTheme hook



export const BigButton = ({ text, onClick, colorVariant }) => {
  const { theme, themes } = useTheme();

  // Determine the button color based on the colorVariant prop
  let buttonColor;
  switch (colorVariant) {
    case 1:
      buttonColor = themes[theme].button.color; // Default color
      break;
    case 2:
      buttonColor = themes[theme].button.alternate; // Alternate color for these cases
      break;
    case 3:
    case 4:
    case 5:
    default:
      buttonColor = themes[theme].button.color; // Default color for 0 or any other case
  }

  return (
    <Button
    onClick={onClick}
    variant="contained"
    sx={{
      whiteSpace: 'no-wrap',
      width: '14vw',
      textTransform: 'none',
      padding: '1vh',
      fontSize: '2vh',
      margin: '0',
      marginTop: '1vh',
      borderRadius: '5px',
      backgroundColor: themes[theme].button.color,
      fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
      display: 'inline-block',
      height: '5vh',
      textAlign: 'center',
      '&:hover': {
        backgroundColor: themes[theme].button.alternate,
        transform: 'scale(1.04)'
      }
    }}>
      {text}
    </Button>
  );
};