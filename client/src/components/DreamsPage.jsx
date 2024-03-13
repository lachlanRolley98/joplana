import { React, useState, useContext } from 'react';
import { AuthContext } from './AuthContext';
import MiniDrawer from './SideDraw';
import { useTheme } from './ThemeContext'; // Import useTheme hook
import { PillContainer, FullInput, SmallButton } from './Containers';
import { handleSubmitDream } from './HTTP/Dreams'
import '../style/AllPage.css'; // Import CSS file for custom styles
import '../style/PageSpecific/Dreams.css'; // Import CSS file for custom styles

const DreamsPage = () => {
  const { token } = useContext(AuthContext);
  const { theme, themes } = useTheme();
  const [date, setDate] = useState('12-12-2023');
  const [pills, setPills] = useState(['Example Pill 1', 'Example Pill 2']);
  const [selectedPillIndex, setSelectedPillIndex] = useState(null);
  const [dreamText, setDreamText] = useState('');
  const [monthData, setMonthData] = useState(null); // State to store month data


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

    // Function to handle getting month data
  const handleSubmDream = async () => {
    console.log('trying');
    try {
      const data = await handleSubmitDream(token, date, dreamText); // Call handleGetMonth
      setMonthData(data); // Update monthData state with returned data
      console.log(data);
    } catch (error) {
      console.log(error);
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
            />
            </div>
            <div className='text-holder'>
              <FullInput stateValue={dreamText} stateFunction={setDreamText} placeholder="What Dreams Did You Have?"/>
            </div>
          </div>
          <div className='button-holder'>
            <SmallButton text={'Submit Today'} onClick={() => handleSubmDream()}/>
            <SmallButton text={'Submit Date'} onClick={() => {console.log('clicked')}}/>
            <SmallButton text={'View Dreams'} onClick={() => {console.log('clicked')}}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamsPage;
