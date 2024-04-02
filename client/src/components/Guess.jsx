import React, { useState } from 'react'


const Guess = () => {

  const [ answer, setAnswer ] = useState('')

  const handleChange = (e) => {
    setAnswer(e.target.value)
    //console.log(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault()
    console.log(answer)
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
    </>
  )
}

export default Guess