import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import './App.css';
import './cursor.css';

function App() {
  return (
    <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                </Routes>
            </div>
        </Router>
  );
}

export default App;
