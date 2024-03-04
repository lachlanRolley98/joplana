import { React } from 'react';
import { BigButton } from './Containers';

const CodexPage = () => {
  return (
    <div>
        Codex Page
        <BigButton text={'Wadup'} onClick={ () => {alert('clicked')}  } colorVariant={1}></BigButton>
    </div>
  );
};

export default CodexPage;

