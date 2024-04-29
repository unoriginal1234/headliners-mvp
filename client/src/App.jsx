import React, {useState, useEffect} from 'react';
import Title from './components/Title.jsx'
import GameCard from './components/GameCard.jsx'
import SpotifyPlayer from './components/SpotifyPlayer.jsx'
import axios from 'axios'

import fakeData from './fakeData.js'

function App() {

  const [gameData, setGameData] = useState({})
  const [todaysDate, setTodaysDate] = useState(new Date().toLocaleDateString("en-US", { timeZone: "America/Los_Angeles" }))

  console.log(gameData, 'data from server')
  console.log(todaysDate)

  //useEffect(()=>setGameData(fakeData), [])
  useEffect(() => {
    populate();
  }, [])

  const populate = () => {

    axios({
      method: 'get',
      url: '/game',
      params: { todaysDate : JSON.stringify(todaysDate) }
    })
    .then((result) => {
      setGameData(result.data[0]);
    })
    .catch((error) => {
      console.log('Error:', error);
    });
  }

  return (
    <>
      <div className="main-container">
          <Title />
        <div className="game-container">
          <GameCard gameData={gameData}/>
        </div>

      </div>
      <p style={{"fontSize": "small", "bottom": "0px"}}>Images &copy; Spotify</p>
    </>

  );
}

export default App;