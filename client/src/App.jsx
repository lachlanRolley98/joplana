// in folder npm start
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthProvider } from './components/AuthContext'; // Import AuthProvider
import { ThemeProvider  } from './components/ThemeContext';


import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import CodexPage from './components/CodexPage';
import DreamsPage from './components/DreamsPage';
import GoalsPage from './components/GoalsPage';
import JournalPage from './components/JournalPage';
import PlannerPage from './components/PlannerPage';
import QuickSubmitPage from './components/QuickSubmitPage';
import ReviewPage from './components/ReviewPage';




function App() {

  return (
    <div className="App">
      <ThemeProvider>
        <AuthProvider>
          <BrowserRouter>
            <Routes>

              <Route path="/" element={<LoginPage />} />
              <Route path="/landing" element={<LandingPage />} />
              <Route path="/Codex" element={<CodexPage />} />
              <Route path="/Dreams" element={<DreamsPage />} />
              <Route path="/Goals" element={<GoalsPage />} />
              <Route path="/Journal" element={<JournalPage />} />
              <Route path="/Planner" element={<PlannerPage />} />
              <Route path="/QuickSubmit" element={<QuickSubmitPage />} />
              <Route path="/Review" element={<ReviewPage />} />


            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
