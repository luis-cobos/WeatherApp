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
<<<<<<< HEAD
        <h5>
            {city}
        </h5>
=======
        <h1>
            {city}
        </h1>
>>>>>>> 297ff11fc2bc261a159f72e736901baa7b728441
>>>>>>> b1e524d5b5d1f736d8b67d94dee668b7052eb1b2
    </div>
    );

    
Location.propTypes = {
    city: PropTypes.string.isRequired,
}

export default Location;
