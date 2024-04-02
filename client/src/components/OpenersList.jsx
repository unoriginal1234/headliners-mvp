import React from 'react'
import OpenersCard from './OpenersCard.jsx'

//TO DO: Add image

const OpenersList = ({openers}) => {
  return (
    <>
    {
      openers.map((opener) => {
        return <OpenersCard opener={opener} key={opener.id}/>
      })
    }
    </>
  )
}

export default OpenersList