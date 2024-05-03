import {React, useState} from 'react'

const Results = ({guesses}) => {

  const [ result, setResult ] = useState('')

  if (guesses === 0 && result !== 'YOU WERE BACKSTAGE FOR') {
    setResult('YOU WERE BACKSTAGE FOR')
  } else if (guesses === 1 && result !== 'YOU WERE FRONT ROW FOR') {
    setResult('YOU WERE FRONT ROW FOR')
  } else if (guesses === 2 && result !== 'You were in the pit for') {
    setResult('You were in the pit for')
  } else if (guesses === 3 && result !== 'You were in General Admission for') {
    setResult('You were in General Admission for')
  } else if (guesses === 4 && result !== 'You were in the nosebleeds for') {
    setResult('You were in the nosebleeds for')
  } else if (guesses > 5 && result !== 'You were in the parking lot for') {
    setResult('You were in the parking lot for')
  }

  return (
    <div>
      <p>{result}</p>
    </div>
  )
}

export default Results