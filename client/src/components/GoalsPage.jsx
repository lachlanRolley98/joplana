import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { useMonth } from './MonthContext'

import MiniDrawer from './SideDraw';
import { useTheme } from './ThemeContext'; // Import useTheme hook
import '../style/AllPage.css'; // Import CSS file for custom styles
import '../style/PageSpecific/Goals.css'; // Import CSS file for custom styles
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { handleAddGoal, handleAddHabitToGoal, handledeleteHabitFromGoal, handledeleteGoal } from './HTTP/Goal'

{/* <ExampleButton text={'Wadup'} onClick={ () => {alert('clicked')}  } colorVariant={1}></ExampleButton>
<ExampleButton text={'Wadup'} onClick={ () => {alert('clicked')}  } colorVariant={2}></ExampleButton>
<ExampleButton text={'Wadup'} onClick={ () => {alert('clicked')}  } colorVariant={3}></ExampleButton>
<ExampleButton text={'Wadup'} onClick={ () => {alert('clicked')}  } colorVariant={4}></ExampleButton>
<ExampleButton text={'Wadup'} onClick={ () => {alert('clicked')}  } colorVariant={5}></ExampleButton> */}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Center horizontally
  justifyContent: 'center', // Center vertically
};


// How to itterate over goals
// for (const goal of user.curGoals) {
//   console.log(`Goal: ${goal.goalName}`);
//   for (const habit of goal.habits) {
//     console.log(`  Habit: ${habit}`);
//   }
// }





// make a goals container that can take in title, description, and habits(do habits as an array ?)
const GoalsPage = () => {
  const { token } = useContext(AuthContext);
  const { theme, themes } = useTheme();
  const [open, setOpen] = React.useState(false);
  const [goalCreateTitle, setGoalCreateTitle] = useState('');
  const { monthData, updateMonth } = useMonth();
  const [ curGoals, setCurGoals ] = useState([]) // This is where we save the goals from local storage to make the pills



  useEffect(() => {
    const curGoalsFromLocal = localStorage.getItem('curGoals');
    if (curGoalsFromLocal) {
      setCurGoals(JSON.parse(curGoalsFromLocal));
    }
  }, []);

  const printLocalGoals = () =>{
    console.log(curGoals)
    curGoals.forEach(goal => {
      console.log(`Goal: ${goal.goalName}`);
      goal.habits.forEach(habit => {
        console.log(`  Habit: ${habit}`);
      });
    });
  }


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const addGoal = async () => {
    try {
      const data = await handleAddGoal(token, goalCreateTitle); // Pass the actual value of goalCreateTitle
      alert('goal added');
    } catch (error) {
      console.log(error);
      alert('nien');
    }
  };

  const addHabitToGoal = async () => {
    console.log('trying');
    try {
      const data = await handleAddHabitToGoal(token, 'pear', 'peepee'); // Pass the actual value of goalCreateTitle
      alert('goal set');
    } catch (error) {
      console.log(error);
      alert('nien');
    }
  };

  const removeHabitFromGoal = async () => {
    console.log('trying');
    try {
      const data = await handledeleteHabitFromGoal(token, 'pear', 'hat'); // Pass the actual value of goalCreateTitle
      alert('goal set');
    } catch (error) {
      console.log(error);
      alert('nien');
    }
  };

  const RemoveGoal = async () => {
    console.log('trying');
    try {
      const data = await handledeleteGoal(token, 'pear'); // Pass the actual value of goalCreateTitle
      alert('goal set');
    } catch (error) {
      console.log(error);
      alert('nien');
    }
  };

  const printMonth = () => {
    console.log(monthData)
  }


  return (
    <div className='all-page-container' style={{ backgroundImage: themes[theme].background.alternate.backgroundImage }}>
      <MiniDrawer/>
      <div className='content'>
        <div className='main-flex'>
          <h3>goals</h3>
          <div>
            <Button variant="contained" onClick={handleOpen}>Create Goal</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    Add Goal
                  </Typography>
                  <div>
                    <div>
                      <TextField label="Goal" type='text' id="outlined-size-normal2" onChange={(event) => {setGoalCreateTitle(event.target.value)}} />
                    </div>
                    <div className='margin-tb'>
                      <Button variant="contained" onClick={ () => {addGoal()} }>Add Goal</Button>
                    </div>
                  </div>
                </Box>
              </Modal>
          </div>
          <div></div>
          <Button variant="contained" onClick={ () => {addHabitToGoal()} }>Add Habit</Button>
          <Button variant="contained" onClick={ () => {removeHabitFromGoal()} }>remove Habit</Button>
          <Button variant="contained" onClick={ () => {RemoveGoal()} }>remove Goal</Button>
          <Button variant="contained" onClick={ () => {printMonth()} }>printMonth</Button>
          <Button variant="contained" onClick={ () => {printLocalGoals()} }>printlocalGoals</Button>

        </div>
      </div>
    </div>
  );
};

export default GoalsPage;

