import React, { useState } from 'react'
import Guesses from './Guesses.jsx'
import Hints from './Hints.jsx'
import JustTellMe from './JustTellMe.jsx'
import Results from './Results.jsx'
import { ImSearch } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Guess = ({headliner}) => {

  const [ answer, setAnswer ] = useState('')
  const [ wrongAnswer, setWrongAnswer ] = useState(false)
  const [ rightAnswer, setRightAnswer ] = useState(false)
  const [ guesses, setGuesses ] = useState(0);
  const [ giveUp, setGiveUp ] = useState(false)

  const handleChange = (e) => {
    setAnswer(e.target.value)
    if (answer.length === 0) {
      setWrongAnswer(false)
    }
  }

  console.log(headliner.name)

  const handleClick = (e) => {
    e.preventDefault()
    if (answer.toLowerCase().replace(/\s/g, '').replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'').replace(/-/g, '').normalize("NFD").replace(/[\u0300-\u036f]/g, "") === headliner.name.toLowerCase().replace(/\s/g, '').replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'').replace(/-/g, '').normalize("NFD").replace(/[\u0300-\u036f]/g, "")) {
      setWrongAnswer(false)
      setRightAnswer(true)
    } else {
      setWrongAnswer(true)
      setGuesses(guesses + 1)
    }
  }

  const handleJustTellMe = (e) => {
    e.preventDefault()
    setWrongAnswer(false)
    setRightAnswer(true)
  }

  if (guesses >= headliner.genres.length && giveUp === false) {
    setGiveUp(true)
  }

  const spotifySrc = `https://open.spotify.com/embed/artist/${headliner.id}?utm_source=generator`

  return (
    <div className="guess-form">
      <h2>Headliner</h2>

      {rightAnswer?
      <div className="headliner-winner">
        <Results guesses={guesses}/>
        <h1 className="headline-name">{headliner.name}</h1>
        <div className="social-media"><FaXTwitter /><FaFacebookSquare /><FaInstagramSquare /></div>
          <img src={headliner.images[1].url} alt={headliner.name} />
          <iframe style={{"border-radius":"12px"}}
                src={spotifySrc}
                width="100%"
                height="352"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy">
          </iframe>
        </div>
        : <form>
        <div className="guess-search">
          <input type="text" name="answer" placeholder="Guess Today's Headliner!"className="guess-text-input" value={answer} onChange={handleChange}/>
          <button type="submit" value="Submit" className="guess-submit" onClick={handleClick} style={{ marginLeft: '10px' }}><ImSearch style={{"color": "#a7a7a7", "margin":"8px" }}/></button>
        </div>
        <Guesses guesses={guesses}/>
        {wrongAnswer? <p className="wrong-answer">WRONG</p> : ""}
        <Hints guesses={guesses} headliner={headliner}/>
        {giveUp? <JustTellMe handleJustTellMe={handleJustTellMe}/> : ""}

      </form>}
    </div>
  )
}

export default Guess