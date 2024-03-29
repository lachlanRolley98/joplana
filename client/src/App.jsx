// in folder npm start
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthProvider } from './components/AuthContext'; // Import AuthProvider
import { ThemeProvider  } from './components/ThemeContext';
import { MonthProvider } from './components/MonthContext'


import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import CodexPage from './components/CodexPage';
import DreamsPage from './components/DreamsPage';
import GoalsPage from './components/GoalsPage';
import JournalPage from './components/JournalPage';
import PlannerPage from './components/PlannerPage';
import QuickSubmitPage from './components/QuickSubmitPage';
import ReviewPage from './components/ReviewPage';
import ExamplePage from './components/ExamplePage'




function App() {

  return (
    <div className="App">
      <ThemeProvider>
        <AuthProvider>
          <MonthProvider>
            <BrowserRouter>
              <Routes>

                <Route path="/" element={<LoginPage />} />
                <Route path="/Landing" element={<LandingPage />} />
                <Route path="/Codex" element={<CodexPage />} />
                <Route path="/Dreams" element={<DreamsPage />} />
                <Route path="/Goals" element={<GoalsPage />} />
                <Route path="/Journal" element={<JournalPage />} />
                <Route path="/Planner" element={<PlannerPage />} />
                <Route path="/QuickSubmit" element={<QuickSubmitPage />} />
                <Route path="/Review" element={<ReviewPage />} />
                <Route path="/ex" element={<ExamplePage />} />

              </Routes>
            </BrowserRouter>
          </MonthProvider>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
