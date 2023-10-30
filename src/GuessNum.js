import React, { useState } from 'react';
import './GuessNum.css';

const GuessTheNumber = () => {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const handleGuess = (event) => {
    event.preventDefault();

    const guessNumber = parseInt(guess);

    if (isNaN(guessNumber)) {
      setMessage('Please enter a valid number.');
    } else if (guessNumber < 1 || guessNumber > 100) {
      setMessage('Please enter a number between 1 and 100.');
    } else if (guessNumber === number) {
      setMessage(`Congratulations! You guessed the number ${number}.`);
      setNumber(Math.floor(Math.random() * 100) + 1);
      setGuess('');
    } else if (guessNumber < number) {
      setMessage(`The number is higher than ${guessNumber}.`);
      setGuess('');
    } else if (guessNumber > number) {
      setMessage(`The number is lower than ${guessNumber}.`);
      setGuess('');
    }
  };

  return (
    <div>
      <h1>Guess the Number</h1>
      <p1>Guess a number between 1 and 100:</p1>
      <form onSubmit={handleGuess}>
        <input type="text" value={guess} onChange={(event) => setGuess(event.target.value)} />
        <button type="submit">Guess</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default GuessTheNumber;