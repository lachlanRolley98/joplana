// in folder npm start
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';




function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<LoginPage />} />
            <Route path="/landing" element={<LandingPage />} />

          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
