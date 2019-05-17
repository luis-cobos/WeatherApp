import React from 'react';
import PropTypes from 'prop-types'

import './styles.css';


const Location = ({city}) => (
    //const city = props.city;

    //Destructuring
    //const {city} = props;
    <div className="locationCont">
<<<<<<< HEAD
        <h5>
            {city}
        </h5>
=======
        <h1>
            {city}
        </h1>
>>>>>>> 297ff11fc2bc261a159f72e736901baa7b728441
    </div>
    );

    
Location.propTypes = {
    city: PropTypes.string.isRequired,
}

export default Location;
