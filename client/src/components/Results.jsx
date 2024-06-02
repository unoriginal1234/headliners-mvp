import {React, useState} from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

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
  }  else if (gaveUp === true && result !== 'in the PARKING LOT') {
    setResult('in the PARKING LOT')
  } else if (guesses > 5 && result !== 'in the PARKING LOT') {
    setResult('in the PARKING LOT')
  }

  const headlinersURL = 'https://playheadliners.com/'
  const twitterURL = `https://twitter.com/intent/tweet?text=I%20was%20${result}%20for%20today's%20Headliner!&url=${headlinersURL}`

  return (
    <div>
      <div className="social-media">
          <a
            href={twitterURL}
            data-size="large"
            target="_blank">
            <FaXTwitter />
          </a>
          {/* <FaFacebookSquare />
          <FaInstagramSquare /> */}
      </div>
      {
        guesses !== 1 ? <p>You were {result} ({guesses} guesses) for...</p> : <p>You were {result} ({guesses} guess) for...</p>
      }

    </div>
  )
}

export default Results