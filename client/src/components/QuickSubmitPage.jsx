import { React, useState } from 'react';
import MiniDrawer from './SideDraw';
import { useTheme } from './ThemeContext'; // Import useTheme hook
import { ThinInput, QuickHabitsContainer, SmallButton } from './Containers';

import '../style/AllPage.css'; // Import CSS file for custom styles
import '../style/PageSpecific/QuickSubmit.css'; // Import CSS file for custom styles
import '../style/PageSpecific/Planner.css'; // css for Thin Input

const QuickSubmitPage = () => {
  const { theme, themes } = useTheme();
  const [ recap, setRecap ] = useState('');
  const [ tommorowPlan, setTommorowPlan ] = useState('');
  const [habits] = useState([
    {title: 'run', rating: 1},
    {title: 'meditate', rating: 3},
    {title: 'read', rating: 4},
    {title: 'time waste', rating: 2},
    {title: 'anx', rating: 2},
    {title: 'anx', rating: 2},
    {title: 'anx', rating: 2},
    {title: 'anx', rating: 2},
    {title: 'run', rating: 1},
    {title: 'meditate', rating: 3},
    {title: 'read', rating: 4},
    {title: 'run', rating: 1},
    {title: 'meditate', rating: 3},
    {title: 'read', rating: 4},
    {title: 'time waste', rating: 2},
    {title: 'anx', rating: 2},
    {title: 'anx', rating: 2},
    {title: 'anx', rating: 2},
    {title: 'anx', rating: 2},
    {title: 'run', rating: 1},
    {title: 'meditate', rating: 3},
    {title: 'read', rating: 4}

  ]);


  return (
    <div className='all-page-container' style={{ backgroundImage: themes[theme].background.alternate.backgroundImage }}>
      <MiniDrawer/>
      <div className='content'>
        <div className='main-flex'>
          <h3 style = {{textAlign: 'center', marginTop: '0px'}}>Quick Submit</h3>
          <div className='recap-container-quick'>
            <ThinInput stateValue={recap} stateFunction={setRecap} placeholder="Recap"/>
          </div>
          <div className='tommorow-plan-container'>
            <ThinInput stateValue={tommorowPlan} stateFunction={setTommorowPlan} placeholder="Tommorow Plan"/>
          </div>
          <div className='habits-container'>
            <QuickHabitsContainer
              title={'Habits'}
              habits={habits}
            ></QuickHabitsContainer>
          </div>
          <div className='submit-buttons-container'>
            <SmallButton text={'Submit Today'} onClick={() => {console.log('clicked')}}/>
            <SmallButton text={'Submit Date'} onClick={() => {console.log('clicked')}}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickSubmitPage;

