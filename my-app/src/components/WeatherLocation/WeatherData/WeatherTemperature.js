import React from "react";
import WeatherIcons from "react-weathericons";
import PropTypes from "prop-types";
import {
  CLOUD,
  CLOUDY,
  SUNNY,
  RAIN,
  SNOW,
  FOG,
  WINDY
} from "../../../constants/Weathers"; // constantes que estamos exportado desde el archivo Weather.js
import "./styles.css";

const icons = {
  // este es un diccionario el cual contiene los nombres de los iconos que va a recibir la funcion
  [CLOUD]: "cloud",
  [CLOUDY]: "cloudy",
  [SUNNY]: "day-sunny",
  [RAIN]: "rain",
  [SNOW]: "snow",
  [FOG]: "day-fog",
  [WINDY]: "windy"
};

const getWeatherIcon = weatherState => {
  // con esta funcion lo que hacemos es camabiar el icono cada que cambie el estado
  const icon = icons[weatherState];

  const iconSize = "4x";
  if (icon)
    return <WeatherIcons className="styleIcon" name={icon} size={iconSize} />;
  // si viene null entonces con el else muestra poder defecto un icono
  else
    return (
      <WeatherIcons className="styleIcon" name={"day-sunny"} size={iconSize} />
    );
};

const WeatherTemperature = ({ temperature, weatherState }) => (
  <div className="weatherTemperatureCont">
    <span> {getWeatherIcon(weatherState)}</span>
    <span className="temperature">{`${temperature} `}</span>
    <span className="temperatureType">{`C°`}</span>
  </div>
);

// eslint-disable-next-line react/no-typos
WeatherTemperature.PropTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;
