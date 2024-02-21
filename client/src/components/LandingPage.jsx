import { React, useState, useContext, useEffect } from 'react';
import { handleSubmitDay, handleUpdateGoals } from './HTTP/Landing'
import { AuthContext } from './AuthContext';
import '../style/PageSpecific/Landing.css';

const LandingPage = () => {
  const { token } = useContext(AuthContext);
  const [recap, setRecap] = useState('');
  const [tplan, setTplan] = useState('');
  const [dream, setDream] = useState('');
  const [goals, setGoals] = useState({testgoal1: 1, testgoal2: 2, testgoal3: 3, testgoal4: 4, testgoal5: 5})
  const [date, setDate] = useState('21-02-2023');
  const [addGoal, setAddGoal] = useState('');
  const [removeGoal, setRemoveGoal] = useState('');

  const[curGoals, setCurGoals] = useState([]);

  useEffect(() => {
    const storedCurGoals = localStorage.getItem("curGoals");
    if (storedCurGoals) {
      setCurGoals(storedCurGoals.split(',')); // split into array because easer to play with
    }
  }, []);

  const addGoals = (newGoal) => {
    const goalBuf = [...curGoals, newGoal];
    setCurGoals(goalBuf)
  }

  const removeGoals = (removeGoal) => {
    console.log('in here')
    const goalBuf = curGoals;
    const indexToRemove = goalBuf.indexOf(removeGoal)
    console.log(`index: ${indexToRemove}`)
    if (indexToRemove > -1) { // only splice array when item is found
      goalBuf.splice(indexToRemove, 1); // 2nd parameter means remove one item only
    }
    setCurGoals(goalBuf)
  }

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
            <button onClick={ () => {handleSubmitDay (token, recap, tplan, dream, date, goals)} }>submit</button>
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
          </div>
        </div>
        <div className='graph-container'>
          <h1>Graphs</h1>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

