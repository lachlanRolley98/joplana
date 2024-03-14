import { React, useContext, useEffect, useState } from 'react';
import { BigButton } from './Containers';
import { useNavigate } from 'react-router-dom';
import MiniDrawer from './SideDraw';
import { useTheme } from './ThemeContext'; // Import useTheme hook
import { useMonth } from './MonthContext'
import { AuthContext } from './AuthContext';
import { handleGetMonth } from './HTTP/Landing';
import { getCurDate } from './Helpers';
import '../style/AllPage.css'; // Import CSS file for custom styles
import '../style/PageSpecific/Landing.css'; // Import CSS file for custom styles

const LandingPage = () => {
  const navigate = useNavigate();
  const { theme, themes } = useTheme();
  const { token } = useContext(AuthContext);
  const { monthData, updateMonth } = useMonth();
  function navigateToDreams () { navigate('/Dreams') }
  function navigateToJournal () { navigate('/Journal') }
  function navigateToGoals () { navigate('/Goals') }
  function navigateToPlanner () { navigate('/Planner') }
  function navigateToReview () { navigate('/Review') }
  function navigateToCodex () { navigate('/Codex') }
  function navigateToQuick () { navigate('/QuickSubmit') }

  useEffect(() => {
      const fetchData = async () => {
        try {
          const currentDate = getCurDate();
          const data = await handleGetMonth(token, currentDate);
          updateMonth(data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
  }, [token]);

  return (
    <div className="all-page-container" style={{ backgroundImage: themes[theme].background.alternate.backgroundImage }}>
      <MiniDrawer/>
      <div className='content'>
        <div className='top-welcome'>
          <div className='welcome-heading'>Welcome to Landing</div>
          <div className='welcome-heading'>Lachlan nd</div>
          <div className='welcome-streak'>Streak: 57 days nd</div>
        </div>
        <div className='landing-buttons'>
          <BigButton text={'Dreams'} onClick = {navigateToDreams} ></BigButton>
          <BigButton text={'Journal'} onClick = {navigateToJournal} ></BigButton>
          <BigButton text={'Goals'} onClick = {navigateToGoals} ></BigButton>
          <BigButton text={'Planner'} onClick = {navigateToPlanner} ></BigButton>
          <BigButton text={'Review'} onClick = {navigateToReview} ></BigButton>
          <BigButton text={'Codex'} onClick = {navigateToCodex} ></BigButton>
          <BigButton text={'Quick-S'} onClick = {navigateToQuick} ></BigButton>
          <BigButton text={'See if month loaded'} onClick = {() => {console.log(monthData)}} ></BigButton>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

