import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ParksList extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const name = this.refs.parkName.value;
    const location = this.refs.location.value;
    this.props.addPark(name, location);
    this.refs.parkForm.reset()
    console.log(name)
  }
  render() {
    const { park } = this.props;
    return (
      <div className="preview">
        <ul>
          {park.map(function(park, index) {
            return <li key={ index }>{park.name} {park.location}</li>;
          })}
        </ul>
        <form ref="parkForm" onSubmit={this.handleSubmit}>
          <input type="text" ref="parkName" placeholder="name" />
          <input type="text" ref="location" placeholder="location" />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

ParksList.propTypes = {
  park: PropTypes.array,
  addPark: PropTypes.func,
};

export default ParksList;
