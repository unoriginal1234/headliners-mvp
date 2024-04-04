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

  return (
    <div className="guess-form">
      <h2>Headliner</h2>

      {rightAnswer? <div className="headliner-winner">
        <h1>{headliner.name}</h1>
        <img src={headliner.images[1].url} alt={headliner.name} /><div className="social-media"><FaXTwitter /><FaFacebookSquare /><FaInstagramSquare /></div>
        </div> : <form>
        <div className="guess-search">
          <input type="text" name="answer" placeholder="Guess!"className="guess-text-input" value={answer} onChange={handleChange}/>
          <button type="submit" value="Submit" className="guess-submit" onClick={handleClick} style={{ marginLeft: '10px' }}><ImSearch style={{"color": "#a7a7a7" }}/></button>
        </div>
      </form>}
      {wrongAnswer? <p>Wrong</p> : ""}
    </div>
  )
}

export default Guess