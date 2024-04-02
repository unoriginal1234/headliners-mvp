import React from 'react'

const VenueCard = ({venue}) => {
  return (
    <>
    <p>Venue: {venue.Name}</p>
    <p>Date: {venue.Date}</p>
    <p>Location: {venue.Location}</p>
    </>
  )
}

export default VenueCard