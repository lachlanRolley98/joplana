import { React, useState, useContext, useEffect } from 'react';
import { handleSubmitDay, handleUpdateGoals, handleGetMonth } from './HTTP/Landing'
import { AuthContext } from './AuthContext';
import '../style/PageSpecific/ex.css';
import { useTheme } from './ThemeContext'; // Path to your useTheme hook


const LandingPage = () => {
  const { token } = useContext(AuthContext);
  const [recap, setRecap] = useState('');
  const [tplan, setTplan] = useState('');
  const [dream, setDream] = useState('');
  const [goals, setGoals] = useState({testgoal1: 1, testgoal2: 2, testgoal3: 3, testgoal4: 4, testgoal5: 5})
  const [date, setDate] = useState('11-9-2023');
  const [addGoal, setAddGoal] = useState('');
  const [removeGoal, setRemoveGoal] = useState('');
  const [goalValues, setGoalValues] = useState({}); // State to store the values of each text box
  const [monthData, setMonthData] = useState(null); // State to store month data
  const { theme, setTheme, themes } = useTheme();

  const[curGoals, setCurGoals] = useState([]);

  useEffect(() => {
    const storedCurGoals = localStorage.getItem("curGoals");
    if (storedCurGoals) {
      setCurGoals(storedCurGoals.split(',')); // split into array because easer to play with
    }
  }, []);
  // NEEEEED TO ENSURE NO DUPLICATES !!!!! OR SHIT WILL CRASH
  const addGoals = (newGoal) => {
    const goalBuf = [...curGoals, newGoal];
    setCurGoals(goalBuf)
  }

  // Function to handle getting month data
  const handleFetchMonthData = async () => {
    try {
      const data = await handleGetMonth(token, date); // Call handleGetMonth
      setMonthData(data); // Update monthData state with returned data
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log('fetching Month On Load')
    handleFetchMonthData(); // Fetch month data on page load
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const removeGoals = (removeGoal) => {
    console.log('in here')
    const goalBuf = curGoals;
    const indexToRemove = goalBuf.indexOf(removeGoal)
    console.log(`index: ${indexToRemove}`)
    if (indexToRemove > -1) { // only splice array when item is found
      goalBuf.splice(indexToRemove, 1); // 2nd parameter means remove one item only
    }
    setCurGoals(goalBuf)

    // incase they give a goal a rating then delete it after, need to delete the rating
    const updatedGoalValues = { ...goalValues };
    delete updatedGoalValues[removeGoal];
    setGoalValues(updatedGoalValues);
  }

  // Function to update the values of the text boxes
  const handleGoalChange = (e, index) => {
    const { value } = e.target;
    setGoalValues(prevState => ({
      ...prevState,
      [index]: value
    }));
  };

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <div className='page-flex'>
        <div className='recap-cards-container'>
          <div className='recap-container'>
            <h1>Recaps</h1>
            <h2>Todays Plan</h2>
            <input className='full-width' type="text"></input>
            <h2>Recap</h2>
            <input className='full-width' type="text" value={recap} onChange={e => setRecap(e.target.value)}></input>
            <h2>Tommorow Plan</h2>
            <input className='full-width' type="text" value={tplan} onChange={e => setTplan(e.target.value)}></input>
            <h2>Dream</h2>
            <input className='full-width' type="text" value={dream} onChange={e => setDream(e.target.value)}></input>
            <button onClick={ () => {handleSubmitDay (token, recap, tplan, dream, date, goalValues)} }>submit</button>
            <button onClick={ () => {console.log(monthData)} }>Print Month</button>
            <button onClick={ () => handleFetchMonthData }>Print Month after getting</button>
          </div>
          <div className='cards-container'>
            <h1>Goal Cards</h1>
            <button className='height-but' onClick={ () => {console.log(`curGoals is: ${curGoals}`)} }>curGoals</button>
            <input className='full-width' type="text" placeholder='add goal' value={addGoal} onChange={e => setAddGoal(e.target.value)}></input>
            <button className='height-but' onClick={ () => addGoals(addGoal) }>add goal</button>
            <input className='full-width' type="text" placeholder='remove goal' value={removeGoal} onChange={e => setRemoveGoal(e.target.value)}></input>
            <button className='height-but' onClick={ () => removeGoals(removeGoal) }>remove goal</button>
            <h2>current goals</h2>
            <input type='text' placeholder={curGoals}></input>
            <button onClick={ () => {handleUpdateGoals (token, curGoals)} }>update Goals</button>
            {
              curGoals.map((goal, index) => (
                <input
                  key={goal}
                  type='text'
                  placeholder='hi'
                  value={goalValues[goal] || ''} // Set value from goalValues state
                  onChange={e => handleGoalChange(e, goal)} // Pass index to identify which text box is being edited
                />
              ))
            }
            <button onClick={ () => { console.log({goalValues}) } }>Goal Values</button>
          </div>
        </div>
      </div>
      <div style={{ background: themes[theme].background }}>
      <nav style={{ background: themes[theme].navbar }}>
        {/* Navigation items */}
      </nav>
      <button style={{ background: themes[theme].button.color }} onClick={toggleTheme}>
        Toggle Theme
      </button>
      {/* Example of using alternate button color */}
      <button style={{ background: themes[theme].button.alternate2 }}>
        Alternate Button
      </button>
    </div>
    </div>
  );
};

export default LandingPage;

