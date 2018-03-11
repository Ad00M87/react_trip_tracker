import React from 'react';
import Trip from './Trip';

const TripList = ({ trips, ...props }) => (
  <div className="row">
    { trips.map( trip =>
      <Trip
        key={trip.id}
        {...trip}
        {...props}
      />
    )}
  </div>
)

export default TripList;
