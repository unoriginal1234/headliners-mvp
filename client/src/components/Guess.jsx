import React, { useState } from 'react'


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
    if (answer === headliner.name) {
      setWrongAnswer(false)
      setRightAnswer(true)
    } else {
      setWrongAnswer(true)
    }
  }

  return (
    <div className="guess-form">
      <h2>Headliner</h2>

      {rightAnswer? <><h1>{headliner.name}</h1><img src={headliner.images[1].url} alt={headliner.name} /></> : <form>
        <div style={{ display: 'flex' }}>
          <input type="text" name="answer" placeholder="Can you guess the Headliner?"className="guess-text-input" value={answer} onChange={handleChange}/>
          <input type="submit" value="Submit" className="guess-submit" onClick={handleClick} style={{ marginLeft: '10px' }}/>
        </div>
      </form>}
      {wrongAnswer? <p>Wrong</p> : ""}
    </div>
  )
}

export default Guess