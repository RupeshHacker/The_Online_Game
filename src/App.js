import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GameBoard from './GameBoard';
import LandingPage from './LandingPage';
import GuessTheNumber from './GuessNum';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/tic-tac-toe" element={<GameBoard />} />
        <Route path="/guess-the-number" element={<GuessTheNumber />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;