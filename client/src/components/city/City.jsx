import React from 'react';
import { BrowserRouter as Router, Switch, Route, useParams} from 'react-router-dom';
import CityHeader from './CityHeader.jsx';
import ReviewList from './ReviewList.jsx';
import styles from './City.module.css';

const City = () => {
  let { id } = useParams();
  return (
    <div className={styles.cityContainer}>
      <CityHeader id={id} />
      <ReviewList />
    </div>
  )
}

export default City;