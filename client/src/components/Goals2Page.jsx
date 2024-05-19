import { React, useState } from 'react';
import MiniDrawer from './SideDraw';
import { useTheme } from './ThemeContext'; // Import useTheme hook
import { GoalsContainer, HabitsContainer, ExampleButton } from './Containers'
import '../style/AllPage.css'; // Import CSS file for custom styles
import '../style/PageSpecific/Goals.css'; // Import CSS file for custom styles

{/* <ExampleButton text={'Wadup'} onClick={ () => {alert('clicked')}  } colorVariant={1}></ExampleButton>
<ExampleButton text={'Wadup'} onClick={ () => {alert('clicked')}  } colorVariant={2}></ExampleButton>
<ExampleButton text={'Wadup'} onClick={ () => {alert('clicked')}  } colorVariant={3}></ExampleButton>
<ExampleButton text={'Wadup'} onClick={ () => {alert('clicked')}  } colorVariant={4}></ExampleButton>
<ExampleButton text={'Wadup'} onClick={ () => {alert('clicked')}  } colorVariant={5}></ExampleButton> */}


// make a goals container that can take in title, description, and habits(do habits as an array ?)
const GoalsPage = () => {
  const { theme, themes } = useTheme();
  const [goals] = useState([
    { title: 'Health', description: 'wana get healthy', habits: ['run', 'diet', 'quit vaping'] },
    { title: 'Happyness', description: 'boost serotonin', habits: ['see friends', 'no youtube'] },
    { title: 'fuck girls', description: 'boost serotonin', habits: [] }
  ]);
  const [habits] = useState([
    {title: 'run', rating: 1},
    {title: 'meditate', rating: 3},
    {title: 'read', rating: 4},
    {title: 'time waste', rating: 2},
    {title: 'anx', rating: 2},
    {title: 'anx', rating: 2},
    {title: 'anx', rating: 2},
    {title: 'anx', rating: 2}
  ]);

  return (
    <div className='all-page-container' style={{ backgroundImage: themes[theme].background.alternate.backgroundImage }}>
      <MiniDrawer/>
      <div className='content'>
        <div className='main-flex'>
          <h3 style = {{textAlign: 'center', marginTop: '0px'}}>Goals</h3>
          <div className='goals-habits-flex'>
            <div className='goals-flex'>
              <GoalsContainer
                title="Goals"
                goals={goals}
              ></GoalsContainer>
            </div>
            <div className='habits-flex'>
              <HabitsContainer
                title={'Habits'}
                habits={habits}
              ></HabitsContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalsPage;

