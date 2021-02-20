/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styles from './CityLink.module.css';
import PropTypes from 'prop-types';

const CityLink = ({ city }) => {
  return (
    <Link to={`/${city.airport_code}`} className={styles.link}>
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

CityLink.propTypes = {
  city: PropTypes.instanceOf(Object).isRequired,
}

export default CityLink;