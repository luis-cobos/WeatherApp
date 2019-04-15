import React, {Component } from 'react';
import {Grid, Col, Row} from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import SearchByCity from './components/Search';
import './App.css';

const cities = [
  'Aguascalientes',
  'Ciudad de México,mx',
  'Jalisco',
  'Monterrey',
  'California,us',
  'Texas,us',
];

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
    return (

        <Grid>
          <Row>
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

                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
    );
  }
}

export default App;
