import React from 'react';
import styles from './CityHeader.module.css';

const CityHeader = ({ city }) => {
  return (
    <div className={styles.headerContainer}>
      <div
        className={styles.imgContainer}
        style={{
          backgroundImage: `url(${city.img})`,
          backgroundSize: 'cover'
        }}>
        <h1 className={styles.h1}>Welcome To {city.city}!</h1>
      </div>
    </div>
  )
}

export default CityHeader;