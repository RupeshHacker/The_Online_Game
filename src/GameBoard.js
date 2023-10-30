import React, { useState, useEffect } from 'react';
import Square from './Square';
import CustomModal from './Modal';
import './GameBoard.css';

const GameBoard = () => {
  const initialSquares = Array(9).fill(null);
  const [squares, setSquares] = useState(initialSquares);
  const [xIsNext, setXIsNext] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (squares[index] || winner) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[index] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setShowModal(false);
    setSquares(initialSquares);
    setXIsNext(true);
    setWinner(null);
  };

  const isBoardFull = () => {
    return squares.every((square) => square !== null);
  };

  const renderSquare = (index) => {
    return <Square value={squares[index]} onClick={() => handleClick(index)} />;
  };

 useEffect(() => {
  const newWinner = calculateWinner(squares);
  if (newWinner) {
    setWinner(newWinner);
    setShowModal(true);
  } else if (isBoardFull()) {
    setWinner('Draw');
    setShowModal(true);
  }
}, [squares]);
  return (
    <div>
      <div className="status">
        {`Next player: ${xIsNext ? 'X' : 'O'}`}
      </div>
      <div className="board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <CustomModal
        show={showModal}
        winner={winner}
        onClose={() => setShowModal(false)}
        onPlayAgain={handleReset}
      />
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default GameBoard;
