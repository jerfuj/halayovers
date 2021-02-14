import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styles from './CityLink.module.css';

const CityLink = ({ city }) => {
  return (
    <div className={styles.linkContainer}>
      <Link to={`/${city.airport_code}`}>
        <div className={styles.code}>{city.airport_code}</div>
        <img src={city.img} className={styles.img} />
      </Link>
    </div>
  )
}

export default CityLink;