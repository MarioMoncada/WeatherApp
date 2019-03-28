import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
const WeatherExtraInfo = ({ humidity, wind }) => (
  <div className="weatherExtrainfoCont">
    <span className="extraInfoTex">{`Humedad: ${humidity}  % `}</span>
    <span className="extraInfoTex">{`Vientos: ${wind}`}</span>
  </div>
);
// eslint-disable-next-line react/no-typos
WeatherExtraInfo.PropTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired
};
export default WeatherExtraInfo;
