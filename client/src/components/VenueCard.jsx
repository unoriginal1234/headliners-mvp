import React from 'react'
import { format,  addDays } from "date-fns";




const VenueCard = ({venue}) => {

  const result = addDays(new Date(venue.Date), 1)

  console.log(venue.Date, 'this is the date of the show')

  // console.log(format(new Date(venue.Date), "EEEE, MMMM dd yyyy"));

  return (
    <>
      <h2 style={{"marginBottom":"0%"}}>Venue</h2>
      <p className="venue-name">{venue.Name}</p>

      <div className="venue-setting">
        <p>Date: {format(result, "EEEE, MMMM dd yyyy")}</p>
        <p>Location: {venue.Location}</p>
      </div>
    </>
  )
}

export default VenueCard