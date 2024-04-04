import React, {useState, useEffect} from 'react';
import Title from './components/Title.jsx'
import GameCard from './components/GameCard.jsx'
import SpotifyPlayer from './components/SpotifyPlayer.jsx'
import axios from 'axios'

import fakeData from './fakeData.js'

function App() {

  const [gameData, setGameData] = useState({})

  console.log(gameData, 'data from server')

  //useEffect(()=>setGameData(fakeData), [])
  useEffect(()=>populate(), [])

  const populate = () => {
    axios({
      method: 'get',
      url: '/game'
    })
    .then((result)=>setGameData(result.data[0]))
  }

  return (
    <div className="main-container">
        <Title />
      <div className="game-container">
        <GameCard gameData={gameData}/>
      </div>
      {/* <SpotifyPlayer /> */}
    </div>
  );
}

export default App;