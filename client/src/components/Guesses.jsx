import React from 'react';

const Guesses = ({guesses}) => {
  return (
    <div className="guess-number">
      <p>Guesses: {guesses}</p>
    </div>
  )
}

export default Guesses;