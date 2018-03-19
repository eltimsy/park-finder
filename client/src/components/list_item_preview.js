import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ParksList from '../containers/parks_list';

const ListItemPreview = ({ item, park }) => {
  if (!item) {
    return (
      <div className="preview">
        <h3>Select an item</h3>
        <p>Description will appear here</p>
      </div>
    );
  }
  return (
    <div className="preview">
      <h2> { item.name } </h2>
      <p>{ item.description }</p>
      <Link to={`view/${item.name}`}>
        <button type="button" className="btn btn-primary">Read More</button>
      </Link>
      { item.name === "parks" ? (
        <ParksList />
      ) : null}
    </div>
  );
};

ListItemPreview.propTypes = {
  item: PropTypes.object,
  park: PropTypes.array,
};

ListItemPreview.defaultProps = {
  item: null,
  park: null,
};

export default ListItemPreview;
