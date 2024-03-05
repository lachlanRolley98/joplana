import { React } from 'react';
import MiniDrawer from './SideDraw';
import '../style/AllPage.css'; // Import CSS file for custom styles

const DreamsPage = () => {
  return (
    <div className='all-page-container'>
      <MiniDrawer/>
      <div className='content'>
        <h1>Dreams</h1>
      </div>
    </div>
  );
};

export default DreamsPage;

