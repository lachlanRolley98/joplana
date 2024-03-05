import { React } from 'react';
import MiniDrawer from './SideDraw';
import '../style/AllPage.css'; // Import CSS file for custom styles

const GoalsPage = () => {
  return (
    <div className='all-page-container'>
      <MiniDrawer/>
      <div className='content'>
        <h1>Goals</h1>
      </div>
    </div>
  );
};

export default GoalsPage;

