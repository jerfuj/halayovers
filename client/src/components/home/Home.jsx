import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import HomeHeader from './HomeHeader.jsx'
import CityLink from './CityLink.jsx';
import styles from './Home.module.css';

const Home = ({ cities }) => {

  return (
    <div className={styles.homeContainer}>
      <HomeHeader />
      <div className={styles.linkContainer}>
        {cities.map(city => (
          <CityLink city={city}/>
        ))}
      </div>
    </div>
  )
}

export default Home;