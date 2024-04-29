import React from 'react'

const VenueCard = ({venue}) => {
  return (
    <>
      <h2 style={{"marginBottom":"0%"}}>Venue</h2>
      <p className="venue-name">{venue.Name}</p>

      <div className="venue-setting">
        <p>Date: {venue.Date}</p>
        <p>Location: {venue.Location}</p>
      </div>
    </>
  )
}

export default VenueCard