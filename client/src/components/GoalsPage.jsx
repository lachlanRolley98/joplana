import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { useMonth } from './MonthContext'
import { SmallButton } from './Containers';


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
  const [openHab, setOpenHab] = React.useState(false);
  const [ creDeGoal, setCredeGoal ] = useState('Create Goal')
  const [ creDeHab, setCreDeHab ] = useState('Create Habit')
  const [goalCreateTitle, setGoalCreateTitle] = useState('');
  const [goalHabitCreateTitle, setGoalHabitCreateTitle] = useState('');
  const [habitCreateTitle, setHabitCreateTitle] = useState('');
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


  const handleOpenCre = () => {
    setCredeGoal('Create Goal')
    setOpen(true);
  }

  const handleOpenDel = () => {
    setCredeGoal('Delete Goal')
    setOpen(true);
  }

  const handleClose = () =>  setOpen(false);

  const handleOpenCreHab = () => {
    setCreDeHab('Create Habit')
    setOpenHab(true);
  }

  const handleOpenDelHab = () => {
    setCreDeHab('Delete Habit')
    setOpenHab(true);
  }

  const handleCloseHab = () =>  setOpenHab(false);



  const addGoal = async () => {
    try {
      const updatedUser = await handleAddGoal(token, goalCreateTitle); // Pass the actual value of goalCreateTitle
      setCurGoals(updatedUser.curGoals); // Update the state with the new goals
      localStorage.setItem('curGoals', JSON.stringify(updatedUser.curGoals)); // Update local storage
      alert('goal added');
    } catch (error) {
      console.log(error);
      alert('nien');
    }
  };

  const RemoveGoal = async () => {
    console.log('trying');
    try {
      const updatedUser = await handledeleteGoal(token, goalCreateTitle); // Pass the actual value of goalCreateTitle
      setCurGoals(updatedUser.curGoals); // Update the state with the new goals
      localStorage.setItem('curGoals', JSON.stringify(updatedUser.curGoals)); // Update local storage
      alert('goal removed');
    } catch (error) {
      console.log(error);
      alert('nien');
    }
  };

  const addHabitToGoal = async () => {
    console.log('trying');
    try {
      const updatedUser = await handleAddHabitToGoal(token, goalHabitCreateTitle, habitCreateTitle);
      console.log(updatedUser);
      setCurGoals(updatedUser.curGoals); // Update the state with the new goals
      localStorage.setItem('curGoals', JSON.stringify(updatedUser.curGoals)); // Update local storage
      alert('Habit added');
    } catch (error) {
      console.log(error);
      alert('nien');
    }
  };

  const removeHabitFromGoal = async () => {
    console.log('trying');
    try {
      const updatedUser = await handledeleteHabitFromGoal(token, goalHabitCreateTitle, habitCreateTitle); // Pass the actual value of goalCreateTitle
      console.log(updatedUser);
      setCurGoals(updatedUser.curGoals); // Update the state with the new goals
      localStorage.setItem('curGoals', JSON.stringify(updatedUser.curGoals)); // Update local storage
      alert('Habit removed');
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
          <h3 style = {{textAlign: 'center', marginTop: '0px'}}>Goals</h3>
          <div>
            <SmallButton text={'Create Goal'} onClick={() => handleOpenCre()}/>
            <SmallButton text={'Delete Goal'} onClick={() => handleOpenDel()}/>
            <SmallButton text={'Create Habit'} onClick={() => handleOpenCreHab()}/>
            <SmallButton text={'Delete Habit'} onClick={() => handleOpenDelHab()}/>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    {creDeGoal}
                  </Typography>
                  <div>
                    <div>
                      <TextField label="Goal" type='text' id="outlined-size-normal2" onChange={(event) => {setGoalCreateTitle(event.target.value)}} />
                    </div>
                    <div className='margin-tb'>
                    {creDeGoal === 'Create Goal' ? (
                      <Button variant="contained" onClick={addGoal}>Add Goal</Button>
                    ) : (
                      <Button variant="contained" onClick={RemoveGoal}>Delete Goal</Button>
                    )}
                    </div>
                  </div>
                </Box>
              </Modal>
          </div>
          <div>
            <Modal
              open={openHab}
              onClose={handleCloseHab}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    {creDeHab}
                  </Typography>
                  <div>
                    <div>
                      <TextField label="Goal" type='text' id="outlined-size-normal2" onChange={(event) => {setGoalHabitCreateTitle(event.target.value)}} />
                      <TextField label="Habit" type='text' id="outlined-size-normal2" onChange={(event) => {setHabitCreateTitle(event.target.value)}} />
                    </div>
                    <div className='margin-tb'>
                    {creDeHab === 'Create Habit' ? (
                      <Button variant="contained" onClick={addHabitToGoal}>Create Habit</Button>
                    ) : (
                      <Button variant="contained" onClick={removeHabitFromGoal}>Delete Habit</Button>
                    )}
                    </div>
                  </div>
                </Box>
              </Modal>
          </div>
          <div>
          {curGoals.map((goal, index) => (
            <div key={index} className="goal-container">
              <h3 className='goal-text'>{goal.goalName}</h3>
              {goal.habits.map((habit, habitIndex) => (
                <Button key={habitIndex} variant="contained" className="habit-button">
                  {habit}
                </Button>
              ))}
            </div>
          ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default GoalsPage;

