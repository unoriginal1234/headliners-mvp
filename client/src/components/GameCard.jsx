import React from 'react'
import VenueCard from './VenueCard.jsx'
import OpenersList from './OpenersList.jsx'
import Guess from './Guess.jsx'

const GameCard = ({gameData}) => {

if (gameData && Object.keys(gameData).length > 0) {

  return (
    <div className="game-card">
      <Guess headliner={gameData.headliner}/>
      <OpenersList openers={gameData.openers}/>
      <div className="venue-card">
        <VenueCard venue={gameData.venue} />
      </div>
    </div>
  )
  } else {
    return <p>Sound check...</p>
  }
}

export default GameCard