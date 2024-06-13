import React from 'react'

const VenueCard = ({venue}) => {

  console.log(venue.Date, 'this is the date of the show')

  const months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
  };

  const showDate = venue.Date.split('-')
  const readableShowDate = months[parseInt(showDate[1])] + ' ' + showDate[2] + ',' + showDate[0]

  return (
    <>
      <h2 style={{"marginBottom":"0%"}}>Venue</h2>
      <p className="venue-name">{venue.Name}</p>

      <div className="venue-setting">
        <p>Date: {readableShowDate}</p>
        <p>Location: {venue.Location}</p>
      </div>
    </>
  )
}

export default VenueCard