import React from 'react'
import VenueCard from './VenueCard.jsx'
import OpenersList from './OpenersList.jsx'
import Guess from './Guess.jsx'

const GameCard = ({gameData}) => {

if (gameData && Object.keys(gameData).length > 0) {

  return (
    <div className="game-card">
      <div className="venue-card">
        <VenueCard venue={gameData.Venue} />
      </div>

      <OpenersList openers={gameData.Openers}/>
      <Guess headliner={gameData.Headliner}/>
    </div>
  )
  } else {
    return <></>
  }
}

export default GameCard