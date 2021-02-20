import React from 'react';
import PropTypes from 'prop-types';
import CityLink from './CityLink.jsx';
import styles from './Home.module.css';

const Home = ({ cities }) => {

  return (
    <div className={styles.homeContainer}>
      <div className={styles.linkContainer}>
        {cities.map(city => (
          <CityLink key={city.airport_code} city={city}/>
        ))}
      </div>
    </div>
  )
}

Home.propTypes = {
  cities: PropTypes.instanceOf(Object).isRequired
}

export default Home;