import React from 'react'
import OpenersCard from './OpenersCard.jsx'

//TO DO: Add image

const OpenersList = ({openers}) => {
  return (
    <div className="openers-list">
      <h2>Openers</h2>
      <div className="openers-carosel">
        {
          openers.map((opener) => {
            return <OpenersCard opener={opener} key={opener.id}/>
          })
        }
      </div>
    </div>
  )
}

export default OpenersList