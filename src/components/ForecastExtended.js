import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ForecastItem from './ForecastItem';
import {getUrlForecastByCity} from './../services/getUrlWeatherByCity';
import transformForecast from './../services/transformForecast';
import './styles.css';

/*
const days =[
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
]
const data= {
    temperature: 10,
    humidity: 10,
    weatherState: 'thunderstorm',
    wind: 'normal',

}
*/
class ForecastExtended extends Component {

    constructor(){
        super();
        this.state= { forecastData: null}
    }

    componentDidMount(){
        this.updateCity(this.props.city);
        }

    componentWillReceiveProps(nextProps){
       if (nextProps.city !== this.props.city) {
           this.setState({ forecastData: null });
           this.updateCity(nextProps.city);
       }
    }


    updateCity = city => {
        const url_forecast = getUrlForecastByCity(city);
        fetch(url_forecast).then(data => 
                  (data.json())
                  ).then(weather_data => {
                    console.log(weather_data);
                    const forecastData = transformForecast(weather_data);
                    console.log(forecastData);
                    this.setState({forecastData});


                  }
                );
    }

    renderForecastItemDays(forecastData) {
        return forecastData.map(forecast => (
        <ForecastItem 
            key= {`${forecast.weekDay}${forecast.hour}`} 
            weekDay={forecast.weekDay} 
            hour={forecast.hour} 
            data={forecast.data}>
            </ForecastItem>));

    }

    renderProgress = () => {
        return "Cargando Pronostico Extendido . ."
    }

    render() {
        const {city} = this.props;
        const {forecastData } = this.state;
        return (
            <div className='forecast-title'>
                <h3>Pronóstico Extendido para {city}</h3>
                {forecastData ? 
                this.renderForecastItemDays(forecastData) :
                this.renderProgress()}
            </div>
        );
    }
        
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;