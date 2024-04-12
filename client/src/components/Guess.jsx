import React, { useState } from 'react'
import { ImSearch } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Guess = ({headliner}) => {

  const [ answer, setAnswer ] = useState('')
  const [ wrongAnswer, setWrongAnswer ] = useState(false)
  const [ rightAnswer, setRightAnswer ] = useState(false)

  const handleChange = (e) => {
    setAnswer(e.target.value)
    if (answer.length === 0) {
      setWrongAnswer(false)
    }
  }

  console.log(headliner.name)

  const handleClick = (e) => {
    e.preventDefault()
    if (answer.toLowerCase().replace(/\s/g, '').replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'').replace(/-/g, '') === headliner.name.toLowerCase().replace(/\s/g, '').replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'').replace(/-/g, '')) {
      setWrongAnswer(false)
      setRightAnswer(true)
    } else {
      setWrongAnswer(true)
    }
  }

  const spotifySrc = `https://open.spotify.com/embed/artist/${headliner.id}?utm_source=generator`

  return (
    <div className="guess-form">
      <h2>Headliner</h2>

      {rightAnswer?
      <div className="headliner-winner">
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
        </div> : <form>
        <div className="guess-search">
          <input type="text" name="answer" placeholder="Guess Today's Headliner!"className="guess-text-input" value={answer} onChange={handleChange}/>
          <button type="submit" value="Submit" className="guess-submit" onClick={handleClick} style={{ marginLeft: '10px' }}><ImSearch style={{"color": "#a7a7a7" }}/></button>
        </div>
      </form>}
      {wrongAnswer? <p className="wrong-answer">Wrong</p> : ""}
    </div>
  )
}

export default Guess