/* eslint-disable react/no-typos */
import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const Location = props => {
  // destructuring
  const { city } = props;

  // const city = props.city; // sin destructuring
  return (
    <div className="locationCont">
      <h1>{city}</h1>
    </div>
  );
  // eslint-disable-next-line react/no-typos

  // eslint-disable-next-line no-unreachable
  Location.PropTypes = {
    city: PropTypes.string.isRequired
  };
};
export default Location;
