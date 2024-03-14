import { React, useState, useContext, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import MiniDrawer from './SideDraw';
import { useTheme } from './ThemeContext'; // Import useTheme hook
import { PillContainer, FullInput, SmallButton, BasicModal } from './Containers';
import { handleSubmitDream, handleChangeTriggers } from './HTTP/Dreams'
import { getCurDate } from './Helpers';
import '../style/AllPage.css'; // Import CSS file for custom styles
import '../style/PageSpecific/Dreams.css'; // Import CSS file for custom styles

const DreamsPage = () => {
  const { token } = useContext(AuthContext);
  const { theme, themes } = useTheme();
  const [date, setDate] = useState(getCurDate()); // Initialize with current date
  const [pills, setPills] = useState([]);
  const [selectedPillIndex, setSelectedPillIndex] = useState(null);
  const [dreamText, setDreamText] = useState('');
  const [addTriggerText, setAddTriggerText] = useState('');
  const [monthData, setMonthData] = useState(null); // State to store month data
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);


  useEffect(() => {
    // Retrieve dream triggers from localStorage and split the string into an array
    // they are put in local storage when user logs in
    const storedDreamTriggers = localStorage.getItem('dreamTriggers');
    if (storedDreamTriggers) {
      const dreamTriggersArray = storedDreamTriggers.split(',');
      setPills(dreamTriggersArray);
    }
  }, []); // Empty dependency array to run the effect only once on component mount

  const addPill = () => {
    // Create a new pill
    const newPill = addTriggerText;
    // Update the pills state
    const updatedPills = [...pills, newPill];
    setPills(updatedPills);
    // Convert the updated pills array to a string
    const modifiedAddDreamsString = updatedPills.join(',');
    // Update local storage
    localStorage.setItem('dreamTriggers', modifiedAddDreamsString);
    setAddTriggerText('');
  };

  const removePill = () => {
    // Update the pills state
    const updatedPills = pills.filter((_, i) => i !== selectedPillIndex);
    setPills(updatedPills);
    setSelectedPillIndex(null);
    // Convert the updated pills array to a string
    const modifiedRemDreamsString = updatedPills.join(',');
    // Update local storage
    localStorage.setItem('dreamTriggers', modifiedRemDreamsString);
  };

  const saveTriggers = () => {
    const modifiedRemDreamsString = pills.join(',');
    console.log(`trying to send with: ${modifiedRemDreamsString}`)
    handleChangeTriggers(token, modifiedRemDreamsString);
    setAddTriggerText('');
  }


  const selectPill = (index) => {
    setSelectedPillIndex(index);
  };

  // Function to handle getting month data
  const handleSubmTodayDream = async () => {
    console.log('trying');
    const tdate = getCurDate()
    try {
      const data = await handleSubmitDream(token, tdate, dreamText, setMonthData);
      console.log(data);
      setDreamText('Recorded')

    } catch (error) {
      console.log(error);
      setDreamText('Recording failed :(')
    }
  };

    // Function to handle getting month data
  const handleSubmDream = async () => {
    console.log('trying');
    try {
      const data = await handleSubmitDream(token, date, dreamText, setMonthData);
      console.log(data);
      setDreamText('Recorded')

    } catch (error) {
      console.log(error);
      setDreamText('Recording failed :(')
    }
  };


  return (
    <div className="all-page-container" style={{ backgroundImage: themes[theme].background.alternate.backgroundImage }}>
      <MiniDrawer/>
      <div className='content'>
        <div className='main-flex'>
          <h3 style = {{textAlign: 'center', marginTop: '0px'}}>Dreams</h3>
          <div className='pill-text-holder'>
            <div className='pill-holder'>
            <PillContainer
              title="Dream Triggers"
              pills={pills}
              onAdd={addPill}
              onRemove={removePill}
              onSelect={selectPill}
              onSave = {saveTriggers}
              placeholder= 'Triggers to add'
              stateValue= {addTriggerText}
              stateFunction = {setAddTriggerText}
            />
            </div>
            <div className='text-holder'>
              <FullInput stateValue={dreamText} stateFunction={setDreamText} placeholder="What Dreams Did You Have?"/>
            </div>
          </div>
          <div className='button-holder'>
            <SmallButton text={'Submit Today'} onClick={() => handleSubmTodayDream()}/>
            <SmallButton text={'Submit Date'} onClick={handleOpen}/>
            <SmallButton text={'View Dreams'} onClick={() => {console.log('clicked')}}/>
          </div>
        </div>
      </div>
      <BasicModal open={open} setOpen={setOpen} setDate={setDate} handleSubmDream={handleSubmDream} />
    </div>
  );
};

export default DreamsPage;
