import React, { useState } from 'react';
import $ from 'jquery';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './Login.module.css';
import PropTypes from 'prop-types';

const Login = ({ setToken }) => {
  const [empNumber, setEmpNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();

  const changeEmpNumber = (e) => {
    setEmpNumber(e.target.value);
  }
  const changePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: 'http://https://peaceful-oasis-17394.herokuapp.com//login',
      data: {empNumber, password},
      success: (res) => {
        if (res === '') {
          setError('Incorrect login credentials. Try again.');
        } else {
          setToken(res);
          sessionStorage.setItem('token', JSON.stringify(res));
        }
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  return (
    <div className={styles.formContainer}>
      <Form onSubmit={handleSubmit}>
        <p className={styles.errorMessage}>{error}</p>
        <Form.Group controlId="employeeNumber">
          <Form.Label>Employee Number</Form.Label>
          <Form.Control type="text" placeholder="Employee #" onChange={changeEmpNumber}/>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={changePassword}/>
        </Form.Group>
        <p className={styles.guestMessage}>*Guests: Use Employee Number 0 and Password 0</p>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.instanceOf(Function).isRequired,
}

export default Login;