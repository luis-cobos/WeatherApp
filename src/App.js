import React, {Component } from 'react';
import {Grid, Col, Row} from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
<<<<<<< HEAD

import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
import Head from './components/Head';
=======
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import SearchByCity from './components/Search';
>>>>>>> 297ff11fc2bc261a159f72e736901baa7b728441
import './App.css';
import { city } from './reducers/city';

const cities = [
  'Aguascalientes',
<<<<<<< HEAD
  'Ciudad de México',
=======
<<<<<<< HEAD
  'Ciudad de México',
=======
  'Ciudad de México,mx',
>>>>>>> 297ff11fc2bc261a159f72e736901baa7b728441
>>>>>>> b1e524d5b5d1f736d8b67d94dee668b7052eb1b2
  'Jalisco',
  'Monterrey',
  'California,us',
  'Texas,us',
];

<<<<<<< HEAD



class App extends Component {

  render() {
<<<<<<< HEAD
=======

=======
class App extends Component {

  constructor (){
    super();
    this.state= {city: null};
  }

  handleSelectedLocation = city => {
    this.setState({city}); 
    console.log(`handleSelectedLocation ${city}`);

  }

  render() {
    const {city } = this.state;
>>>>>>> 297ff11fc2bc261a159f72e736901baa7b728441
>>>>>>> b1e524d5b5d1f736d8b67d94dee668b7052eb1b2
    return (

        <Grid>
          <Row>
<<<<<<< HEAD
                <Head/>
=======
<<<<<<< HEAD
                <Head cities={cities}/>
>>>>>>> b1e524d5b5d1f736d8b67d94dee668b7052eb1b2
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationListContainer 
                cities={cities} >
              </LocationListContainer>
            </Col>
            <Col xs={12} md={6}>
              <Paper elevation={4}>
                <div className="details">
                  <ForecastExtendedContainer />
=======
                  <SearchByCity />
          </Row>
          <Row>
            <Col xs={12} md={6}>
            <AppBar position='sticky'>
              <Toolbar>
                <Typography variant='title' color='inherit'>
                  Pronostico Actual
                </Typography>
              </Toolbar>
            </AppBar>
              <LocationList 
                cities={cities} 
                onSelectedLocation={this.handleSelectedLocation} >
              </LocationList>
            </Col>
            <Col xs={12} md={6}>
            <AppBar position='sticky'>
              <Toolbar>
                <Typography variant='title' color='inherit'>
                  Pronostico Extendido
                </Typography>
              </Toolbar>
            </AppBar>
              <Paper elevation={4}>
                <div className="details">

                {city && 
                  <ForecastExtended city={city}></ForecastExtended>

                  }
>>>>>>> 297ff11fc2bc261a159f72e736901baa7b728441

                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
    );
  }
}


export default App;

