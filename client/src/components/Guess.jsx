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
    <>
    <form>
      <label>
        Headliner:
        <input type="text" name="answer" value={answer} onChange={handleChange}/>
      </label>
      <input type="submit" value="Submit" onClick={handleClick}/>
    </form>
    {wrongAnswer? <p>Wrong</p> : ""}
    {rightAnswer? <p>Right</p> : ""}

    </>
  )
}

export default Guess