import React, { Component } from "react";
import LocationList from "./components/LocationList";
import ForecastExtended from "./components/ForecastExtended";
import { Grid, Col, Row } from "react-flexbox-grid";
import { Navbar, Nav } from "react-bootstrap";

import "./App.css";
const cities = [
  "Buenos Aires,ar",
  "Madrid,es",
  "Barcelona,es",
  "Bogotá,col",
  "La Paz, bol",
  "Tel Aviv, il"
];

class App extends Component {
  constructor() {
    super();
    this.state = { city: "" };
  }
  handleSelectedLocation = city => {
    this.setState = { city };
    console.log(`handleSelectLocation ${city}`);
  };
  render() {
    const { city } = this.state;
    return (
      <Grid>
        <Row />
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">World's Weather</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Navbar>
        <Row>
          <Col xs={12} md={6}>
            <LocationList
              cities={cities}
              onSelectedLocation={this.handleSelectedLocation}
            />
          </Col>
          <Col xs={12} md={6}>
            <div className="ditails">
              <ForecastExtended city={city} />
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
