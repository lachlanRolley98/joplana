import { React, useState } from 'react';
import MiniDrawer from './SideDraw';
import { useTheme } from './ThemeContext'; // Import useTheme hook
import { ThinInput, SmallButton } from './Containers';
import { LineChart } from '@mui/x-charts/LineChart';
import '../style/AllPage.css'; // Import CSS file for custom styles
import '../style/PageSpecific/Review.css'; // Import CSS file for custom styles

// <ReadOnlyDateText date={myDynamicLabel} text={dynamicDefaultValue}/>
// <ReadOnlyDateText date={'Tuesday'} text={dyans}/>

const ReviewPage = () => {
  const { theme, themes } = useTheme();
  const [ recap, setRecap ] = useState('');
  // const [selected] = useState('dreams');
  // const myDynamicLabel = "Monday";
  // const dynamicDefaultValue = "Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples ApplesApples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples ApplesApples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples ApplesApples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples ApplesApples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples ApplesApples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples Apples";
  // const dyans = 'I like chocolate';
  // const values2 = [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,5];

  return (
    <div className='all-page-container' style={{ backgroundImage: themes[theme].background.alternate.backgroundImage }}>
      <MiniDrawer/>
      <div className='content'>
        <div className='main-flex'>
          <h3 style = {{textAlign: 'center', marginTop: '0px'}}>Review</h3>
          <div className='time-action-buttons-container'>
            <SmallButton text={'Day'} onClick={() => {console.log('clicked')}}/>
            <SmallButton text={'Week'} onClick={() => {console.log('clicked')}}/>
            <SmallButton text={'Month'} onClick={() => {console.log('clicked')}}/>
            <div class="vl"></div>
            <SmallButton text={'Dreams'} onClick={() => {console.log('clicked')}}/>
            <SmallButton text={'Journal'} onClick={() => {console.log('clicked')}}/>
            <SmallButton text={'Goals'} onClick={() => {console.log('clicked')}}/>
          </div>
          <div className='review-recap-container'>
            <ThinInput stateValue={recap} stateFunction={setRecap} placeholder="Recap"/>
          </div>
          <div className='graph-container'>
            <div className='singular-graph'>
              <LineChart
                xAxis={[{ data: [5,6,7,8,9,10,11]}]}
                series={[
                  {
                    curve: 'linear',
                    label: 'running',
                    data: [2, 5, 2, 8, 1, 5, 1],
                  },
                  {
                    curve: 'linear',
                    label: 'sleeping',
                    data: [-22, 20, 22, 20, 12, 12, 8],
                  },
                ]}

              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;

