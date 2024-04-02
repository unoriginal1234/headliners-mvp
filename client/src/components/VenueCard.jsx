import React from 'react'

const VenueCard = ({venue}) => {
  return (
    <>
    <p>This is the venue card</p>
    <p>Venue: {venue.Name}</p>
    <p>Date: {venue.Date}</p>
    <p>Location: {venue.Location}</p>
    </>
  )
}

export default VenueCard