import React from 'react'
import VenueCard from './VenueCard.jsx'
import OpenersList from './OpenersList.jsx'
import Guess from './Guess.jsx'

const GameCard = ({gameData}) => {

if (gameData && Object.keys(gameData).length > 0) {

  return (
    <>
    <VenueCard venue={gameData.Venue} />
    <OpenersList openers={gameData.Openers}/>
    <Guess headliner={gameData.Headliner}/>
    </>
  )
  } else {
    return <></>
  }
}

export default GameCard