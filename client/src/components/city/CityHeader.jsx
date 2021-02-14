import React from 'react';
import styles from './CityHeader.module.css';

const CityHeader = ({ city }) => {
  return (
    <div className={styles.headerContainer}>
      <h1>Welcome To {city.city}, {city.state_or_country}!</h1>
      <img className={styles.img} src={city.img}/>
    </div>
  )
}

export default CityHeader;