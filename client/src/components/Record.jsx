import React, {useState, useEffect} from 'react'

const Record = () => {

  const [newbie, setNewbie] = useState(true)
  const [history, setHistory] = useState(null)

  useEffect(()=>{
    let localHist = localStorage.getItem('history')
    if (localHist === null) {
      localStorage.setItem('history', JSON.stringify(1))
    } else {
      setNewbie(false)
      localHist = parseInt(localHist) + 1
      localStorage.setItem('history', JSON.stringify(localHist))
      setHistory(localHist)
    }
  }, [])

  return (
    <div className="record">
      { newbie  ?
        <p style={{"marginTop": 0}}>
          YOUR FIRST HEADLINER!
        </p>
        :
        <p style={{"marginTop": 0}}>
          Cool. You've seen {history} Headliners.
        </p>
      }
    </div>
  )

}

export default Record