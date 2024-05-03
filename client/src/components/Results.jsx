import {React, useState} from 'react'

const Results = ({guesses, gaveUp}) => {

  const [ result, setResult ] = useState('')

  if (guesses === 0 && result !== 'BACKSTAGE') {
    setResult('BACKSTAGE')
  } else if (guesses === 1 && gaveUp === false && result !== 'FRONT ROW') {
    setResult('FRONT ROW')
  } else if (guesses === 2 && gaveUp === false && result !== 'IN THE PIT') {
    setResult('IN THE PIT')
  } else if (guesses === 3 && gaveUp === false && result !== 'in GENERAL ADMISSION') {
    setResult('in GENERAL ADMISSION')
  } else if (guesses === 4 && gaveUp === false && result !== 'in the NOSEBLEEDS') {
    setResult('in the NOSEBLEEDS')
  } else if (guesses > 5 || gaveUp === true && result !== 'in the PARKING LOT') {
    setResult('in the PARKING LOT')
  }

  return (
    <div>
      <p>you were {result} for...</p>
    </div>
  )
}

export default Results