import React from 'react';
import HomeHeader from './HomeHeader.jsx'
import CityLink from './CityLink.jsx';
import styles from './Home.module.css';


const cities = ['PHX', 'LGB', 'LAX', 'OAK', 'SMF', 'SAN', 'SFO', 'SJC', 'BOS', 'LAS', 'JFK', 'SEA', 'AUS', 'MCO', 'ONT', 'BNE', 'SYD', 'FUK', 'KIX', 'CTS', 'HND', 'NRT', 'AKL', 'ICN']

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <HomeHeader />
      <div className={styles.linkContainer}>
        {cities.map(city => (
          <CityLink city={city} />
        ))}
      </div>
    </div>
  )
}

export default Home;