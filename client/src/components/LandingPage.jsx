import { React } from 'react';
import { BigButton } from './Containers';
import { useNavigate } from 'react-router-dom';
import MiniDrawer from './SideDraw';
import '../style/AllPage.css'; // Import CSS file for custom styles

const LandingPage = () => {
  const navigate = useNavigate()
  function navigateToDreams () { navigate('/Dreams') }
  function navigateToJournal () { navigate('/Journal') }
  function navigateToGoals () { navigate('/Goals') }
  function navigateToPlanner () { navigate('/Planner') }
  function navigateToReview () { navigate('/Review') }
  function navigateToCodex () { navigate('/Codex') }
  function navigateToQuick () { navigate('/QuickSubmit') }
  return (
    <div className='all-page-container'>
      <MiniDrawer/>
      <div className='content'>
        <h1>Welcome to Landing</h1>
        <BigButton text={'Dreams'} onClick = {navigateToDreams} ></BigButton>
        <BigButton text={'Journal'} onClick = {navigateToJournal} ></BigButton>
        <BigButton text={'Goals'} onClick = {navigateToGoals} ></BigButton>
        <BigButton text={'Planner'} onClick = {navigateToPlanner} ></BigButton>
        <BigButton text={'Review'} onClick = {navigateToReview} ></BigButton>
        <BigButton text={'Codex'} onClick = {navigateToCodex} ></BigButton>
        <BigButton text={'Quick Submit'} onClick = {navigateToQuick} ></BigButton>
      </div>
    </div>
  );
};

export default LandingPage;

