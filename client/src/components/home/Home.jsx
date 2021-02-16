import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import CityLink from './CityLink.jsx';
import styles from './Home.module.css';

const Home = ({ cities }) => {

  return (
    <div className={styles.homeContainer}>
      <div className={styles.linkContainer}>
        {cities.map(city => (
          <CityLink city={city}/>
        ))}
      </div>
    </div>
  )
}

export default Home;