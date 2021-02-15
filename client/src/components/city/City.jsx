import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useParams} from 'react-router-dom';
import $ from 'jquery';
import CityHeader from './CityHeader.jsx';
import ReviewList from './ReviewList.jsx';
import styles from './City.module.css';

const City = () => {
  let { id } = useParams();
  const [city, setCity] = useState({});
  const [reviews, setReviews] = useState([])

  const getCityReviews = () => {
    $.ajax({
      method: 'GET',
      url: `http://localhost:3000/api/cities/${id}`,
      success: (data) => {
        setCity(data[0][0]);
        setReviews(data[1]);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  useEffect(() => {
    getCityReviews();
  }, [])

  return (
    <div className={styles.cityContainer}>
      <CityHeader city={city} />
      <ReviewList city={city} reviews={reviews} getCityReviews={getCityReviews}/>
    </div>
  )
}

export default City;