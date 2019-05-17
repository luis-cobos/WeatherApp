//import {getUrlForecastByCity} from './../services/getUrlWeatherByCity';
import transformForecast from './../services/transformForecast';

export const SET_CITY= 'SET_CITY';
export const SET_FORECAST_DATA= 'SET_FORECAST_DATA';


const setCity = payload => ({ type: SET_CITY, payload});
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload});

const api_key = "db28a40e0569530b1105a3ebb607c05e";
const url = "http://api.openweathermap.org/data/2.5/forecast";


export const setSelectedCity = payload => {
  console.log(`payload: ${payload}`);
    return dispatch => {
        const url_forecast = `${url}?q=${payload}&appid=${api_key}`;

        //activar en el estado un indicador de busqueda de datos
        dispatch(setCity(payload));

       
        return fetch(url_forecast).then(data => 
                  (data.json())
                  ).then(
                    weather_data => {
                    console.log(`action: ${weather_data}`);
                    const forecastData = transformForecast(weather_data);
                    console.log(`forecastData: ${forecastData}`);

                    //modificar el estado con el resultado de la promise (fetch)
                    dispatch(setForecastData({city: payload, forecastData}));
                  }
                );
    };
};