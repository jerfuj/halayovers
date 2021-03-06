import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CityLink from './CityLink.jsx';
import styles from './Home.module.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const Home = ({ cities }) => {
  const [show, setShow] = useState(true);
  const handleClose = () => {
    setShow(false);
    sessionStorage.setItem('visited', true);
  }

  useEffect(() => {
    if (sessionStorage.getItem('visited')) {
      setShow(false);
    }
  }, [])

  return (
    <div className={styles.homeContainer}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <div className={styles.welcomeHeader}>
            <Modal.Title>Welcome!</Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.welcomeText}>
            <p>
              For best demo experience, head over to <b>KIX</b>!
              <br />
              Thanks for stopping by!
            </p>
            <p className={styles.jeremy}>
              - Jeremy
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
      <div className={styles.linkContainer}>
        {cities.map(city => (
          <CityLink key={city.airport_code} city={city}/>
        ))}
      </div>
    </div>
  )
}

Home.propTypes = {
  cities: PropTypes.instanceOf(Object).isRequired
}

export default Home;