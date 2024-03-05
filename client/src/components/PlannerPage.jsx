import { React } from 'react';
import MiniDrawer from './SideDraw';
import '../style/AllPage.css'; // Import CSS file for custom styles

const PlannerPage = () => {
  return (
    <div className='all-page-container'>
      <MiniDrawer/>
      <div className='content'>
        <h1>Planner</h1>
      </div>
    </div>
  );
};

export default PlannerPage;

