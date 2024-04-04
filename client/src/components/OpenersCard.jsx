import React, { useState } from 'react'

const OpenersCard = ({opener}) => {



  return (
    <div className="openers-card">
      <img src={opener.images[2].url} alt={opener.name} />
      <p>{opener.name}</p>
    </div>
  )
}

export default OpenersCard