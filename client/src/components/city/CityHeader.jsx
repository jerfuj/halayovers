import React from 'react';
import styles from './CityHeader.module.css';
import PropTypes from 'prop-types';

const CityHeader = ({ city }) => {
  return (
    <div className={styles.headerContainer}>
      <div
        className={styles.imgContainer}
        style={{
          backgroundImage: `url(${city.img})`,
          backgroundSize: 'cover'
        }}>
        <div className={styles.overlay}>
          <h1 className={styles.h1}>Welcome To {city.city}!</h1>
        </div>
      </div>
    </div>
  )
}

CityHeader.propTypes = {
  city: PropTypes.instanceOf(Object).isRequired
}

export default CityHeader;