import React from 'react';

const Hints = ({guesses, headliner}) => {

  if (guesses === 0) {
    return <></>
  }
  if (guesses === headliner.genres.length) {
    return (<div className="genre-hints">
      <span>I'm out of hints.</span>
    </div>)
  }
  if (guesses > headliner.genres.length) {
    return (<div className="genre-hints">
      <span>You're hopeless.</span>
    </div>)
  } else return (
    <div className="genre-hints">
      <span>Think...</span>
      <p>{headliner.genres[guesses % headliner.genres.length - 1]}</p>
    </div>
  )
}

export default Hints