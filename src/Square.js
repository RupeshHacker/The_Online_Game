import React from 'react';

const Square = ({ value, onClick }) => {
  const style = {
    fontWeight: 'bold',
    fontSize: '24px',
    color: value === 'X' ? 'blue' : value === 'O' ? 'red' : 'black',
    backgroundColor: 'grey', 
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #999',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  return (
    <button className="square" style={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
