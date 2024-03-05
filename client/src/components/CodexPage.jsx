import { React, useTheme } from 'react';
import { ExampleButton } from './Containers';
import MiniDrawer from './SideDraw';
import '../style/AllPage.css'; // Import CSS file for custom styles


const CodexPage = () => {

  return (
    <div className='all-page-container'>
      <MiniDrawer/>
      <div className='content'>
        <h1>Codex</h1>
        <ExampleButton text={'Wadup'} onClick={ () => {alert('clicked')}  } ></ExampleButton>
        <ExampleButton text={'Wadup'} onClick={ () => {alert('clicked')}  } colorVariant={1}></ExampleButton>
        <ExampleButton text={'Wadup'} onClick={ () => {alert('clicked')}  } colorVariant={2}></ExampleButton>
        <ExampleButton text={'Wadup'} onClick={ () => {alert('clicked')}  } colorVariant={3}></ExampleButton>
        <ExampleButton text={'Wadup'} onClick={ () => {alert('clicked')}  } colorVariant={4}></ExampleButton>
        <ExampleButton text={'Wadup'} onClick={ () => {alert('clicked')}  } colorVariant={5}></ExampleButton>
      </div>
    </div>
  );
};

export default CodexPage;

