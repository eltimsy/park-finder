import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ParksList = ({ park }) => {
  return (
    <div className="preview">
      <ul>
        {park.map(function(park, index) {
          return <li key={ index }>{park.name} {park.location}</li>;
        })}
      </ul>
    </div>
  );
};

ParksList.propTypes = {
  park: PropTypes.array,
};

export default ParksList;
