import React from 'react';
import Table from 'react-bootstrap/Table';
import styles from './Hotel.module.css';
import PropTypes from 'prop-types';

const Hotel = ({ hotelInfo }) => {
  if (!hotelInfo) {
    return null;
  }
  return (
    <div className={styles.tableContainer}>
      <h2>Hotel Info</h2>
      <Table striped className={styles.table}>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{hotelInfo.name}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>{hotelInfo.address}</td>
          </tr>
          <tr>
            <td>Phone Number</td>
            <td>{hotelInfo.phone}</td>
          </tr>
          <tr>
            <td>Microwave</td>
            <td>{hotelInfo.microwave}</td>
          </tr>
          <tr>
            <td>Refrigerator</td>
            <td>{hotelInfo.fridge}</td>
          </tr>
          <tr>
            <td>Breakfast</td>
            <td>{hotelInfo.breakfast}</td>
          </tr>
          <tr>
            <td>Gym</td>
            <td>{hotelInfo.gym}</td>
          </tr>
          <tr>
            <td>Shuttle</td>
            <td>{hotelInfo.shuttle}</td>
          </tr>
          <tr>
            <td>Pickup</td>
            <td>{hotelInfo.pickup} prior to departure</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

Hotel.propTypes = {
  hotelInfo: PropTypes.instanceOf(Object).isRequired,
}

export default Hotel;