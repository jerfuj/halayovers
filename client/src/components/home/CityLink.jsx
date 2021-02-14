import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styles from './CityLink.module.css';

const CityLink = ({city}) => {
  return (
    <div className={styles.linkContainer}>
      <Link to={`/${city}`}>{city}</Link>
    </div>
  )
}

export default CityLink;