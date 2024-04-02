import React, {useState, useEffect} from 'react';
import Title from './components/Title.jsx'
import GameCard from './components/GameCard.jsx'

import fakeData from './fakeData.js'

function App() {

  const [gameData, setGameData] = useState({})

  // console.log(gameData)

  useEffect(()=>setGameData(fakeData), [])

  return (
    <div>
      <Title />
      <GameCard gameData={gameData}/>
    </div>
  );
}

export default App;