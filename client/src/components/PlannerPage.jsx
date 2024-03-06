import { React, useState } from 'react';
import MiniDrawer from './SideDraw';
import { useTheme } from './ThemeContext'; // Import useTheme hook
import { ThinInput, PillContainer,TasksPillContainer } from './Containers';
import '../style/AllPage.css'; // Import CSS file for custom styles
import '../style/PageSpecific/Planner.css';

const PlannerPage = () => {
  const { theme, themes } = useTheme();
  const [ monthPlan, setMonthPlan ] = useState('');
  const [ weekPlan, setWeekPlan ] = useState('');
  const [ dayPlan, setDayPlan ] = useState('');
  const [pills, setPills] = useState(['Example Pill 1', 'Example Pill 2']);
  const [selectedPillIndex, setSelectedPillIndex] = useState(null);

  const addPill = () => {
    const newPill = `Pill ${pills.length + 1}`;
    setPills([...pills, newPill]);
  };

  const removePill = () => {
    setPills(pills.filter((_, i) => i !== selectedPillIndex));
    setSelectedPillIndex(null); // Reset selection
  };

  const selectPill = (index) => {
    setSelectedPillIndex(index);
  };

  return (
    <div className='all-page-container' style={{ backgroundImage: themes[theme].background.alternate.backgroundImage }}>
      <MiniDrawer/>
      <div className='content'>
        <div className='main-flex'>
          <h3 style = {{textAlign: 'center', marginTop: '0px'}}>Planner</h3>
          <div className='m-w-d-flex'>
            <div className='mwd-text-button-flex'>
              <div className='mwd-text'>
                <ThinInput stateValue={monthPlan} stateFunction={setMonthPlan} placeholder="Month Plan"/>
              </div>
              <div className='mwd-button'>
                <button style={{width: '100%', borderRadius: '15px'}}>update</button>
              </div>
            </div>
            <div className='mwd-text-button-flex'>
              <div className='mwd-text'>
                <ThinInput stateValue={weekPlan} stateFunction={setWeekPlan} placeholder="Week Plan"/>
              </div>
              <div className='mwd-button'>
                <button style={{width: '100%', borderRadius: '15px'}}>update</button>
              </div>
            </div>
            <div className='mwd-text-button-flex'>
              <div className='mwd-text'>
                <ThinInput stateValue={dayPlan} stateFunction={setDayPlan} placeholder="Day Plan"/>
              </div>
              <div className='mwd-button'>
                <button style={{width: '100%', borderRadius: '15px'}}>update</button>
              </div>
            </div>
          </div>
          <div className='both-tasks-flex'>
            <div className='random-task-flex'>
              <PillContainer
                title="Random Tasks"
                pills={pills}
                onAdd={addPill}
                onRemove={removePill}
                onSelect={selectPill}
              />
            </div>
            <div className='specific-task-flex'>
              <TasksPillContainer
                title="Random Tasks"
                pills={pills}
                onAdd={addPill}
                onRemove={removePill}
                onSelect={selectPill}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlannerPage;

