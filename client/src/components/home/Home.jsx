import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import HomeHeader from './HomeHeader.jsx'
import CityLink from './CityLink.jsx';
import styles from './Home.module.css';

const Home = ({ setSelectedCity }) => {
  const [cities, setCities] = useState([])

  useEffect(() => {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/api/cities',
      success: (data) => {
        setCities(data);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }, [])

  return (
    <div className={styles.homeContainer}>
      <HomeHeader />
      <div className={styles.linkContainer}>
        {cities.map(city => (
          <CityLink city={city} setSelectedCity={setSelectedCity}/>
        ))}
      </div>
    </div>
  )
}

export default Home;