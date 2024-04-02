import React from 'react'

const VenueCard = ({venue}) => {
  return (
    <>
      <h3>Venue</h3>
      <p>{venue.Name}</p>

      <div className="venue-setting">
        <p>Date: {venue.Date}</p>
        <p>Location: {venue.Location}</p>
      </div>
    </>
  )
}

export default VenueCard