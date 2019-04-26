import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {PropTypes} from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import transformWeather from './../../services/transformWeather';
import {getUrlWeatherByCity} from './../../services/getUrlWeatherByCity';

class WeatherLocation extends Component {

    constructor({city}) {
        console.log("Constructor done..");
        super();
        this.state = {
            city,
            data: null,
        };
    }

    componentDidMount(){
        const {city}= this.state;
        const api_weather = getUrlWeatherByCity(city);
        fetch(api_weather).then(resolve => {
                   
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data);
            this.setState({
                data: newWeather,
                city: newWeather.city,
            });
        });

    
}
  

    render() {
        const {onWeatherLocationClick} = this.props;
        const {city, data} = this.state;
        return(
            <div className="weatherLocationCont" onClick={onWeatherLocationClick} >
                <Location city={city} /> 
                {data ? 
                <WeatherData data={data} />:
                <CircularProgress size={60} thickness={7}/>}
        </div>);
    }

}
   
WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}


export default WeatherLocation;