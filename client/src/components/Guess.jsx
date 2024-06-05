import React, { useState, useEffect } from 'react'
import Guesses from './Guesses.jsx'
import Hints from './Hints.jsx'
import JustTellMe from './JustTellMe.jsx'
import Results from './Results.jsx'
import Record from './Record.jsx'
import NextUp from './NextUp.jsx'
import axios from 'axios'
import { ImSearch } from "react-icons/im";


const Guess = ({headliner}) => {

  const [ answer, setAnswer ] = useState('')
  const [ wrongAnswer, setWrongAnswer ] = useState(false)
  const [ rightAnswer, setRightAnswer ] = useState(false)
  const [ guesses, setGuesses ] = useState(0);
  const [ giveUp, setGiveUp ] = useState(false);
  const [ gaveUp, setGaveUp ] = useState(false);
  const [ options, setOptions ] = useState([])
  const [ timeClear, setTimeClear] = useState(null);
  const spotifySrc = `https://open.spotify.com/embed/artist/${headliner.id}?utm_source=generator`

  const handleChange = (e) => {
    setAnswer(e.target.value)
    if (answer.length === 0) {
      setWrongAnswer(false)
    }

    if (e.target.value === "") {
      clearTimeout(timeClear);
      setOptions([]);
    } else {
      clearTimeout(timeClear);
      setTimeClear(setTimeout(()=> {
        getArtists();
      }, 200))
    }
  }

  const getArtists = () => {
    axios({
      method: 'get',
      url: '/artists',
      params: {artist : answer}
    })
    .then((result) => {
      //console.log(result.data)
      setOptions((result.data.map((res) => res.artist)));
    })
    .catch((error) => {
      console.log('Error:', error);
    });
  }

  const handleOptionSelect = (e) => {
    e.preventDefault()
    setOptions([]); // Clear options after selection
    setAnswer(options[e.target.value])
    checkAnswer(options[e.target.value]);
  };

  //console.log(headliner.name)

  const handleClick = (e) => {
    e.preventDefault()
    checkAnswer(answer);
  }

  const checkAnswer = (submission) => {
    if (submission.
      toLowerCase().
      replace(/\bthe\b/gi, '').
      replace(/\s/g, '').
      replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'').
      replace(/-/g, '').
      normalize("NFD").
      replace(/[\u0300-\u036f]/g, "") === headliner.name.
      toLowerCase().
      replace(/\bthe\b/gi, '').
      replace(/\s/g, '').
      replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'').
      replace(/-/g, '').
      normalize("NFD").
      replace(/[\u0300-\u036f]/g, "")) {
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
    setGaveUp(true)
  }

  if (guesses >= headliner.genres.length && giveUp === false) {
    setGiveUp(true)
  }

  return (
    <div className="guess-form">
      <h2>Headliner</h2>

      {rightAnswer?
      <div className="headliner-winner">
        <Record />
        <Results guesses={guesses} gaveUp={gaveUp}/>
        <h1 className="headline-name">{headliner.name}</h1>
        <div className="headliner-pic-spot">
            <img src={headliner.images[1].url} alt={headliner.name}/>
            <NextUp />
            <iframe style={{"borderRadius":"12px"}}
                  src={spotifySrc}
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowfullscreen=""
                  allow="autoplay; clipboard-write; encrypted-media; Fullscreen; picture-in-picture"
                  loading="lazy">
            </iframe>
        </div>

      </div>

        : <form>

        <div className="guess-search">

          <input
            type="text"
            name="answer"
            placeholder="Guess Today's Headliner!"
            className="guess-text-input"
            value={answer}
            onChange={handleChange}/>

          <button
            type="submit"
            value="Submit"
            aria-label="Submit"
            className="guess-submit"
            onClick={handleClick}
            style={{ marginLeft: '10px' }}>
            <ImSearch
              style={{"color": "#a7a7a7", "margin":"8px" }}/>
          </button>

        </div>

        <div className="search-and-options">
          {options.length > 0 && (
            <div>
              {options.map((option, index) => (
                <button
                  key={index}
                  value={index}
                  aria-label={option}
                  onClick={handleOptionSelect}>
                  {option}
                </button>
              ))}
            </div>
          )}
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