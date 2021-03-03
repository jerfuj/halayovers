import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CityLink from './CityLink.jsx';
import styles from './Home.module.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const Home = ({ cities }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  useEffect(() => {
    setShow(true);
  }, [])

  return (
    <div className={styles.homeContainer}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <h4>Aloha!</h4>
          <p>
            For best demo experience, head over to KIX! Thanks for looking!

            - Jeremy
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
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