import React, {useState, useEffect} from 'react';
import Title from './components/Title.jsx'
import GameCard from './components/GameCard.jsx'

import fakeData from './fakeData.js'

function App() {

  const [gameData, setGameData] = useState({})

  // console.log(gameData)

  useEffect(()=>setGameData(fakeData), [])

  return (
    <div className="main-container">
      <div className="title-container">
        <Title />
      </div>
      <div className="game-container">
        <GameCard gameData={gameData}/>
      </div>
    </div>
  );
}

export default App;