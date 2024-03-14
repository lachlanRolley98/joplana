import { React, useState } from 'react';
import Button from '@mui/material/Button';
import { useTheme } from './ThemeContext'; // Path to your useTheme hook
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs'; // Import dayjs library
import 'dayjs/locale/en'; // Import English locale for dayjs
import utc from 'dayjs/plugin/utc'; // Import UTC plugin for dayjs
import localizedFormat from 'dayjs/plugin/localizedFormat'; //




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
      width: '20vw',
      height: '7vw',
      textTransform: 'none',
      padding: '0vh',
      fontSize: ['1.5vh', '2.5vh', '3vh'], // Responsive font sizes
      margin: '20px 40px',
      borderRadius: '40px',
      backgroundColor: themes[theme].bigButton.color,
      fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
      display: 'inline-block',
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

export const SmallButton = ({ text, onClick }) => {
  const { theme, themes } = useTheme();

  return (
    <Button
    onClick={onClick}
    variant="contained"
    sx={{
      whiteSpace: 'no-wrap',
      width: '20vw',
      height: '3.5vw',
      textTransform: 'none',
      padding: '0vh',
      fontSize: ['0.9vh', '1.5vh', '2vh'], // Responsive font sizes
      margin: '10px 20px',
      borderRadius: '20px',
      backgroundColor: themes[theme].bigButton.color,
      fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
      display: 'inline-block',
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

export const PillContainer = ({ title, pills, onAdd, onRemove, onSelect, onSave, placeholder, stateValue, stateFunction }) => {
  return (
    <div className="pill-container">
      <h2>{title}</h2>
      <div className="pills">
        {pills.map((pill, index) => (
          <button
            key={index}
            className={index}
            onClick={() => onSelect(index)}
          >
            {pill}
          </button>
        ))}
      </div>

      <div className="pill-actions">
        <textarea className='Full-input-Planner' type="input" placeholder={placeholder} value={stateValue} onChange={e => stateFunction(e.target.value)}></textarea>
        <div className='pill-actions-buttons'>
          <button onClick={onAdd} style={{marginTop: '10px'}}>Add</button>
          <button onClick={onRemove} style={{marginTop: '10px'}}>Remove</button>
          <button onClick={onSave} style={{marginTop: '10px'}}>Save</button>
        </div>
      </div>
    </div>
  );
};

// need too add onclicks in the TasPilCon
export const TasksPillContainer = ({ title, pills, onAdd, onRemove, onSelect }) => {
  return (
    <div className="pill-container">
      <div>
        <h2 style={{marginBottom: '4px'}}>{title}</h2>
        <div className='tasks-three-buttons'>
          <button>today</button>
          <button>Week</button>
          <button>Month</button>
          <button>All</button>
        </div>
      </div>
      <div className="pills">
        {pills.map((pill, index) => (
          <button
            key={index}
            className={index}
            onClick={() => onSelect(index)}
          >
            {pill}
          </button>
        ))}
      </div>
      <div className="pill-actions">
        <button onClick={onAdd} style={{marginTop: '10px'}}>Add</button>
        <button onClick={onRemove} style={{marginTop: '10px'}}>Remove</button>
      </div>
    </div>
  );
};

// ok takes pills called goals
// all classNames in Goals
export const GoalsContainer = ({title, goals}) => {
  return(
    <div className="goals-container">
      <div>
        <h2 style={{marginBottom: '4px'}}>{title}</h2>
      </div>
      <div className="goals-holder">
        {goals.map((goals, index) => (
          <div className='goal-individual'>
            <h3>{goals.title}</h3>
            <p>{goals.description}</p>
            <ul>
              {goals.habits.map((habit, habitIndex) => (
                <li key = {habitIndex}> {habit} </li>
              ))}
            </ul>
            <button>Add Habit</button>
            <button>Remove Habit</button>
            <button>Delete Goal</button>
          </div>
        ))}
      </div>
      <div className="pill-actions">
        <button onClick={() => {console.log('hello world')}} style={{marginTop: '10px'}}>Add Habit</button>
      </div>
    </div>
  );
};

export const HabitsContainer = ({title, habits}) => {
  return(
    <div className="habits-container">
      <div>
        <h2 style={{marginBottom: '4px'}}>{title}</h2>
      </div>
      <div className="habits-holder">
        {habits.map((habit, index) => (
          <div className='habit-individual'>
            <h3>{habit.title}</h3>
            <div className='habit-sub-buttons'>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
              <button>rest</button>
            </div>
            <button>Delete Habit</button>
          </div>
        ))}
      </div>
      <div className="pill-actions">
        <button onClick={() => {console.log('hello world')}} style={{marginTop: '10px'}}>Add Habit</button>
      </div>
    </div>
  );
};

export const QuickHabitsContainer = ({habits}) => {
  return(
    <div className="habits-container">
      <div className="habits-holder">
        {habits.map((habit, index) => (
          <div className='habit-individual'>
            <h3>{habit.title}</h3>
            <div className='habit-sub-buttons'>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
              <button>rest</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};





// Full-input is in Dreams
export const FullInput = ({ stateValue, stateFunction, placeholder }) => {
  return (
    <textarea className='Full-input' type="text" placeholder={placeholder} value={stateValue} onChange={e => stateFunction(e.target.value)}></textarea>
  );
};

// Full-input is in Planner
export const ThinInput = ({ stateValue, stateFunction, placeholder }) => {
  return (
    <textarea className='Full-input-Planner' type="textarea" placeholder={placeholder} value={stateValue} onChange={e => stateFunction(e.target.value)}></textarea>
  );
};


export const ReadOnlyDateText = ({ date, text }) => {
  return (
    <TextField
      id="outlined-read-only-input"
      label={date}
      fullWidth
      multiline
      defaultValue={text ? text : 'No Input'}
      InputProps={{
        readOnly: true,
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          backgroundColor: 'white', // Background color for the input
          marginTop: '7px',
          marginBottom: '15px'
        },
      }}
    />
  );
};

export const PictureWithLines = ({ values }) => {
  // Calculate the position of the point based on the values
  const calculatePoints = (values) => {
    const totalValues = values.length;
    const pointArray = [];
    const stepX = 700 / totalValues; // Step size for horizontal movement
    let currentX = stepX / 2; // Start from the middle of the first step
    const startY = 156; // Start Y position
    let currentY = startY;

    for (let i = 0; i < totalValues; i++) {
      const value = values[i];
      const direction = value >= 3 ? 1 : -1; // Positive for values 3, 4, 5 and negative for 1, 2
      const stepY = (value % 3) * 20; // Adjust Y step based on the value
      const endX = currentX + stepX; // End X position for the line
      const endY = currentY - stepY * direction; // End Y position for the line
      pointArray.push([currentX, currentY]); // Start point
      pointArray.push([endX, endY]); // End point
      currentX = endX; // Update current X position for the next step
      currentY = endY; // Update current X position for the next step
    }

    return pointArray;
  };

  const points = calculatePoints(values);

  // Convert point coordinates to SVG path
  const path = points.map(([x, y], index) => {
    return index === 0 ? `M ${x},${y}` : `L ${x},${y}`;
  });

  const svgPath = path.join(' ');

  return (
    <div className="picture-container">
      <svg viewBox="0 0 100% 100%" className="svg-container">
        <path d={svgPath} fill="none" stroke="black" strokeWidth="1" />
      </svg>
    </div>
  );
};

const style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const BasicModal = (props) => {
  const { open, setOpen, setDate, handleSubmDream } = props; // Destructure props to access open and setOpen
  const handleClose = () => setOpen(false);
  const [value, setValue] = useState(null); // calender likes this format

  const handleDateChange = (newValue) => {
    setDate(dayjs(newValue).format('DD-MM-YYYY'));
    setValue(newValue)
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Please Select a date
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                value={value} onChange={(newValue) => handleDateChange(newValue)}
              />
            </LocalizationProvider>
            <SmallButton text={'submit'} onClick={() => handleSubmDream()}/>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}




