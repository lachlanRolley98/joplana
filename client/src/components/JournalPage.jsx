import { React, useState, useContext } from 'react';
import { AuthContext } from './AuthContext';
import MiniDrawer from './SideDraw';
import { useTheme } from './ThemeContext'; // Import useTheme hook
import { FullInput, SmallButton, BasicCalSubModal } from './Containers';
import { handleSubmitJournal } from './HTTP/Journal'
import { getCurDate } from './Helpers';
import { useMonth } from './MonthContext'
import '../style/AllPage.css'; // Import CSS file for custom styles
import '../style/PageSpecific/Journal.css'; // Import CSS file for custom styles

const JournalPage = () => {
  const { token } = useContext(AuthContext);
  const { monthData, updateMonth } = useMonth();
  const [date, setDate] = useState(getCurDate());
  const { theme, themes } = useTheme();
  const [journalText, setJournalText] = useState('');
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleSubmTodayJournal = async () => {
    console.log('trying');
    const tdate = getCurDate()
    try {
      const data = await handleSubmitJournal(token, tdate, journalText, updateMonth);
      console.log(data);
      localStorage.setItem('tjournal', journalText);
      alert('journal Recorded');

    } catch (error) {
      console.log(error);
      setJournalText('Recording failed :(')
    }
  };

  const handleSubmJournal = async () => {
    console.log('trying');
    try {
      const data = await handleSubmitJournal(token, date, journalText, updateMonth);
      console.log(data);
      alert('journal Recorded');

    } catch (error) {
      console.log(error);
      setJournalText('Recording failed :(')
    }
  };

  return (
    <div className='all-page-container' style={{ backgroundImage: themes[theme].background.alternate.backgroundImage }}>
      <BasicCalSubModal open={open} setOpen={setOpen} setDate={setDate} handleSub={handleSubmJournal} />
      <MiniDrawer/>
      <div className='content'>
        <div className='main-flex'>
          <h3 style = {{textAlign: 'center', marginTop: '0px'}}>Journal</h3>
          <div className='text-holder'>
            <FullInput stateValue={journalText} stateFunction={setJournalText} placeholder="Todays Recap"/>
          </div>
          <div className='but-holder'>
            <SmallButton text={'Submit Today'} onClick={() => handleSubmTodayJournal()}/>
            <SmallButton text={'Submit Date'} onClick = {handleOpen}/>
            <SmallButton text={'View Journals'} onClick={() => {console.log('clicked')}}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalPage;

