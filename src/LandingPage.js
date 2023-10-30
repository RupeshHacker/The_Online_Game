import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div>
  <h1>Welcome to the Games App</h1>
  <p>Please select a game:</p>
  <div class="button-container">
    <button><Link to="/tic-tac-toe">Tic Tac Toe</Link></button>
    <button><Link to="/guess-the-number">Guess the Number</Link></button>
  </div>
</div>
  );
}; 

export default LandingPage;