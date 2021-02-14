import React from 'react';
import styles from './CityHeader.module.css';

const CityHeader = ({ id }) => {
  return (
    <div className={styles.headerContainer}>
      <h1>Welcome To {id}!</h1>
    </div>
  )
}

export default CityHeader;