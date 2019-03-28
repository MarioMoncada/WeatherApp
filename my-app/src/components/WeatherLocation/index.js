import React, { Component } from "react"; //componente funcional o componente de funcion
// es el componente mas sencillo de realizar. antes este componente era funcional, ahora es componente de clase
import transformWeather from "./../../services/transformWeather";
import { api_weather } from "./../../constants/api_url";
import Location from "./Location";
import WeatherData from "./WeatherData";
import { SUNNY } from "../../constants/Weathers";
import "./styles.css";

const data = {
  temperature: 25,
  weatherState: SUNNY,
  humidity: 10,
  wind: "10 m/s"
};

class WeatherLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: "Madrid",
      data: data
    };
  }

  handleUpdate = () => {
    fetch(api_weather)
      .then(resolve => {
        return resolve.json();
      })
      .then(data => {
        const newWeather = transformWeather(data);
        this.setState({ data: newWeather });
      });
  };
  render() {
    const { city, data } = this.state;
    return (
      <div className="weatherLocationCont">
        <Location city={city} />
        <WeatherData data={data} />
        <button onClick={this.handleUpdate}>Actualizar</button>
      </div>
    );
  }
}

export default WeatherLocation;
