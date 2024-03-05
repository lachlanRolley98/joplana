import { React } from 'react';
import Button from '@mui/material/Button';
import { useTheme } from './ThemeContext'; // Path to your useTheme hook



export const ExampleButton = ({ text, onClick, colorVariant }) => {
  const { theme, themes } = useTheme();

  // Determine the button color based on the colorVariant prop
  let buttonColor;
  switch (colorVariant) {
    case 1:
      buttonColor = themes[theme].button.alternate1; // Default color
      break;
    case 2:
      buttonColor = themes[theme].button.alternate2; // Alternate color for these cases
      break;
    case 3:
      buttonColor = themes[theme].button.alternate3; // Alternate color for these cases
      break;
    case 4:
      buttonColor = themes[theme].button.alternate4; // Alternate color for these cases
      break;
    case 5:
      buttonColor = themes[theme].button.alternate5; // Alternate color for these cases
      break;
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
      backgroundColor: buttonColor,
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

export const BigButton = ({ text, onClick }) => {
  const { theme, themes } = useTheme();

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
      backgroundColor: themes[theme].bigButton.color,
      fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
      display: 'inline-block',
      height: '5vh',
      textAlign: 'center',
      '&:hover': {
        backgroundColor: themes[theme].button.color,
        transform: 'scale(1.04)'
      }
    }}>
      {text}
    </Button>
  );
};

