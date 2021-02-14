import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styles from './CityLink.module.css';

const CityLink = ({ city }) => {
  return (
    <Link to={`/${city.airport_code}`}>
      <div
        className={styles.linkContainer}
        style={{
          backgroundImage: `url(${city.img})`,
          backgroundSize: 'cover'
        }}
      >
        <div className={styles.code}>
          {city.airport_code}
        </div>
      </div>
    </Link>
  )
}

export default CityLink;