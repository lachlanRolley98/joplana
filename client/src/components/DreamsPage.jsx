import { React } from 'react';
import MiniDrawer from './SideDraw';
import { useTheme } from './ThemeContext'; // Import useTheme hook
import '../style/AllPage.css'; // Import CSS file for custom styles
import '../style/PageSpecific/Dreams.css'; // Import CSS file for custom styles

const DreamsPage = () => {
  const { theme, themes } = useTheme();
  return (
    <div className="all-page-container" style={{ backgroundImage: themes[theme].background.alternate.backgroundImage }}>
      <MiniDrawer/>
      <div className='content'>
        <div className='main-flex'>
          <div className='pill-text-holder'>
            <div className='pill-holder'>
              hi
            </div>
            <div className='text-holder'>
              hi
            </div>
          </div>
          <div className='button-holder'>
            hi
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamsPage;

