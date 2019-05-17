import React from 'react';
import PropTypes  from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './styles.css';



const LocationList = ( {cities, onSelectedLocation} ) => {

   const handleWeatherLocationClick = city => {
<<<<<<< HEAD
        console.log(`handleWeatherLocationClick city: ${city}`);
=======
        console.log("handleWeatherLocationClick");
>>>>>>> 297ff11fc2bc261a159f72e736901baa7b728441
        onSelectedLocation(city);
    };

    const strToComponents = cities =>(
        cities.map(city => 
        (<WeatherLocation 
            key={city} 
            city={city} 
            onWeatherLocationClick={() => handleWeatherLocationClick(city)}/>))
    );

    return(
        <div className="locationList">
            {strToComponents(cities)};
    </div>  ); 
};
  

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}
export default LocationList;
