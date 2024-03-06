import { React, useState } from 'react';
import MiniDrawer from './SideDraw';
import { useTheme } from './ThemeContext'; // Import useTheme hook
import { FullInput, SmallButton } from './Containers';
import '../style/AllPage.css'; // Import CSS file for custom styles
import '../style/PageSpecific/Journal.css'; // Import CSS file for custom styles

const JournalPage = () => {
  const { theme, themes } = useTheme();
  const [journalText, setJournalText] = useState('');
  return (
    <div className='all-page-container' style={{ backgroundImage: themes[theme].background.alternate.backgroundImage }}>
      <MiniDrawer/>
      <div className='content'>
        <div className='main-flex'>
          <h3 style = {{textAlign: 'center', marginTop: '0px'}}>Journal</h3>
          <div className='text-holder'>
            <FullInput stateValue={journalText} stateFunction={setJournalText} placeholder="Todays Recap"/>
          </div>
          <div className='but-holder'>
            <SmallButton text={'Submit Today'} onClick={() => {console.log('clicked')}}/>
            <SmallButton text={'Submit Date'} onClick={() => {console.log('clicked')}}/>
            <SmallButton text={'View Journals'} onClick={() => {console.log('clicked')}}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalPage;

