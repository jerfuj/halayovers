import React, { useState } from 'react';
import $ from 'jquery';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import dateFormat from 'dateformat';
import PropTypes from 'prop-types';

const ReviewForm = ({ city, handleClose, getCityReviews }) => {
  const [categories, setCategories] = useState('');
  const [review, setReview] = useState('');
  const airportCode = city.airport_code;
  const token = JSON.parse(sessionStorage.getItem('token'));


  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
    const now = new Date();
    $.ajax({
      traditional: true,
      method: 'POST',
      url: `http://https://peaceful-oasis-17394.herokuapp.com//api/cities/${airportCode}/review`,
      data: {
        name: token.first_name,
        date: dateFormat(now, "yyyy-mm-dd HH:MM:ss"),
        categories,
        review
      },
      success: () => {
        handleClose();
        getCityReviews();
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  const handleCategoriesChange = (e) => {
    let selected = Array.from(e.target.selectedOptions);
    selected = selected.map(select => (
      select.innerHTML
    ))
    setCategories(selected);
  }

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={token.first_name} readOnly required/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Categories</Form.Label>
          <Form.Control as="select" multiple onChange={handleCategoriesChange} required>
            <option value="Food">Food</option>
            <option value="Sightseeing">Sightseeing</option>
            <option value="Hotel">Hotel</option>
            <option value="Airport">Airport</option>
            <option value="Discounts">Discounts</option>
            <option value="Shopping">Shopping</option>
            <option value="Flight">Flight</option>
            <option value="Misc">Misc</option>
          </Form.Control>
          <Form.Text className="text-muted">
            To select multiple: hold down command (mac) or ctrl (windows)
          </Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Control as="textarea" rows={5}
          placeholder="Tell us about it!"
          onChange={handleReviewChange}
          required
        />
      </Form.Group>
      <Button
        type="submit"
        variant="success"
      >
          Submit
      </Button>
    </Form>

  )
}

ReviewForm.propTypes = {
  city: PropTypes.instanceOf(Object).isRequired,
  handleClose: PropTypes.instanceOf(Function).isRequired,
  getCityReviews: PropTypes.instanceOf(Function).isRequired,
}

export default ReviewForm;