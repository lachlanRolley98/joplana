import { React, useState } from 'react';
import MiniDrawer from './SideDraw';
import { useTheme } from './ThemeContext'; // Import useTheme hook
import { DreamsPillContainer, FullInput, SmallButton } from './Containers';
import '../style/AllPage.css'; // Import CSS file for custom styles
import '../style/PageSpecific/Dreams.css'; // Import CSS file for custom styles

const DreamsPage = () => {
  const { theme, themes } = useTheme();
  const [pills, setPills] = useState(['Example Pill 1', 'Example Pill 2']);
  const [selectedPillIndex, setSelectedPillIndex] = useState(null);
  const [dreamText, setDreamText] = useState('');

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
    <div className="all-page-container" style={{ backgroundImage: themes[theme].background.alternate.backgroundImage }}>
      <MiniDrawer/>
      <div className='content'>
        <div className='main-flex'>
          <div className='pill-text-holder'>
            <div className='pill-holder'>
            <DreamsPillContainer
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
            <SmallButton text={'Submit Today'} onClick={() => {console.log('clicked')}}/>
            <SmallButton text={'Submit Date'} onClick={() => {console.log('clicked')}}/>
            <SmallButton text={'View Dreams'} onClick={() => {console.log('clicked')}}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamsPage;
