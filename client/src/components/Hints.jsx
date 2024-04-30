import React from 'react';

const Hints = ({guesses, headliner}) => {

  if (guesses === 0) {
    return <></>
  } else return (
    <div className="genre-hints">
      <span>Think...</span>
      <p>{headliner.genres[guesses % headliner.genres.length - 1]}</p>

    </div>
  )
}

export default Hints