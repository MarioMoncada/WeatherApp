import React, { Component } from "react"; //componente funcional o componente de funcion
// es el componente mas sencillo de realizar. antes este componente era funcional, ahora es componente de clase
import transformWeather from "./../../services/transformWeather";
import { api_weather } from "./../../constants/api_url";
import Location from "./Location";
import WeatherData from "./WeatherData";
import { SUNNY } from "../../constants/Weathers";
import "./styles.css";

class WeatherLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: "Bogotá",
      data: null
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.handleUpdate();
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
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
    console.log("render");
    const { city, data } = this.state;
    return (
      <div className="weatherLocationCont">
        <Location city={city} />
        {data ? <WeatherData data={data} /> : "Cargando..."}
      </div>
    );
  }
}

export default WeatherLocation;
