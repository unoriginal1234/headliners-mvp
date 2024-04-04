import React from 'react'

const VenueCard = ({venue}) => {
  return (
    <>
      <h2>Venue</h2>
      <p style={{"fontWeight":"bold", "font-size":"x-large"}}>{venue.Name}</p>

      <div className="venue-setting">
        <p>Date: {venue.Date}</p>
        <p>Location: {venue.Location}</p>
      </div>
    </>
  )
}

export default VenueCard