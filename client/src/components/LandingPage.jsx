import { React, useState, useContext } from 'react';
import { handleSubmitDay } from './HTTP/Landing'
import { AuthContext } from './AuthContext';
import '../style/PageSpecific/Landing.css';


const LandingPage = () => {
  const { token } = useContext(AuthContext);
  const [recap, setRecap] = useState('');
  const [tplan, setTplan] = useState('');
  const [dream, setDream] = useState('');
  //const [goals, setGoals] = useState(['gym', 'med', 'diet'])
  const [date, setDate] = useState('21-02-2023')
  return (
    <div>
      <div className='page-flex'>
        <div className='recap-cards-container'>
          <div className='recap-container'>
            <h1>Recaps</h1>
            <h2>Todays Plan</h2>
            <input className='full-width' type="text"></input>
            <h2>Recap</h2>
            <input className='full-width' type="text" value={recap} onChange={e => setRecap(e.target.value)}></input>
            <h2>Tommorow Plan</h2>
            <input className='full-width' type="text" value={tplan} onChange={e => setTplan(e.target.value)}></input>
            <h2>Dream</h2>
            <input className='full-width' type="text" value={dream} onChange={e => setDream(e.target.value)}></input>
            <button onClick={ () => {handleSubmitDay (token, recap, tplan, dream, date)} }>submit</button>
          </div>
          <div className='cards-container'>
            <h1>Goal Cards</h1>
          </div>
        </div>
        <div className='graph-container'>
          <h1>Graphs</h1>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

/*
      <h2>Todays Plan</h2>
      <textarea className='full-width'></textarea>
      <h2>Recap</h2>
      <textarea className='full-width'></textarea>
      <h2>Tommorow Plan</h2>
      <textarea className='full-width'></textarea>
      <h2>Dream</h2>
      <textarea className='full-width'></textarea>
      <h2>Goal Cards</h2>
      */
