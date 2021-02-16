import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useParams} from 'react-router-dom';
import $ from 'jquery';
import CityHeader from './CityHeader.jsx';
import ReviewList from './ReviewList.jsx';
import styles from './City.module.css';

const City = () => {
  let { id } = useParams();
  const [city, setCity] = useState({});
  const [reviews, setReviews] = useState([]);
  const [hotelInfo, setHotelInfo] = useState([]);

  const changeSort = (e, id) => {
    const value = e.target.value;
    console.log(value);
    $.ajax({
      method: 'GET',
      url: `http://localhost:3000/api/${id}?sort=${value}`,
      success: (data) => {
        setReviews(data);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  const getCityReviews = () => {
    $.ajax({
      method: 'GET',
      url: `http://localhost:3000/api/cities/${id}`,
      success: (data) => {
        setCity(data[0][0]);
        setReviews(data[1]);
        setHotelInfo(data[2][0]);
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
      <ReviewList
        city={city}
        reviews={reviews}
        getCityReviews={getCityReviews}
        hotelInfo={hotelInfo}
        changeSort={changeSort}
      />
    </div>
  )
}

export default City;