import React from 'react';

const CustomModal = ({ show, winner, onClose, onPlayAgain }) => {
  let message = winner === 'Draw' ? 'Match is Draw ♾️' : `Winner is 🏆: ${winner}`;

  return (
    <div className={`modal ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Game Over</h5>
            <button type="button" className="close" onClick={onClose}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>{message}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
            <button type="button" className="btn btn-primary" onClick={onPlayAgain}>
              Play Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
