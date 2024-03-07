import { React, useState } from 'react';
import MiniDrawer from './SideDraw';
import { useTheme } from './ThemeContext'; // Import useTheme hook
import { FullInput } from './Containers';
import '../style/AllPage.css'; // Import CSS file for custom styles
import '../style/PageSpecific/Codex.css'; // Import CSS file for custom styles
import '../style/PageSpecific/Dreams.css'; // for FullInput css


const CodexPage = () => {
  const { theme, themes } = useTheme();
  const [painText, setPainText] = useState('');
  const [codexText, setCodexText] = useState('');
  const [pleasureText, setPleasureText] = useState('');
  return (
    <div className='all-page-container' style={{ backgroundImage: themes[theme].background.alternate.backgroundImage }}>
      <MiniDrawer/>
      <div className='content'>
        <div className='main-flex'>
          <h3 style = {{textAlign: 'center', marginTop: '0px'}}>Codex</h3>
          <div className='three-text-holders'>
            <div className='push-pull-holder'>
              <FullInput stateValue={painText} stateFunction={setPainText} placeholder="What happens if you do nothing ?"/>
            </div>
            <div className='codex-holder'>
              <FullInput stateValue={codexText} stateFunction={setCodexText} placeholder="personal life code"/>
            </div>
            <div className='push-pull-holder'>
              <FullInput stateValue={pleasureText} stateFunction={setPleasureText} placeholder="What happens if you take action ?"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodexPage;

