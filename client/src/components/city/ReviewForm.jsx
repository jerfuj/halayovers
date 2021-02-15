import React, {useState} from 'react';
import styles from './ReviewForm.module.css';
import $ from 'jquery';
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const ReviewForm = ({ city, handleClose, getCityReviews }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [categories, setCategories] = useState('');
  const [review, setReview] = useState('');
  const airportCode = city.airport_code;

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
    $.ajax({
      traditional: true,
      method: 'POST',
      url: `http://localhost:3000/api/cities/${airportCode}/review`,
      data: {
        name,
        date,
        categories,
        review
      },
      success: (res) => {
        handleClose();
        getCityReviews();
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handleDateChange = (e) => {
    setDate(e.target.value);
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
        <Form.Control type="text" onChange={handleNameChange} required/>
      </Form.Group>
      <Form.Group controlId="date">
        <Form.Label>Date of Trip</Form.Label>
        <Form.Control type="date" onChange={handleDateChange} required/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Category</Form.Label>
          <Form.Control as="select" multiple onChange={handleCategoriesChange} required>
            <option value="food">Food</option>
            <option value="sightseeing">Sightseeing</option>
            <option value="hotel">Hotel</option>
            <option value="airport">Airport</option>
            <option value="discounts">Discounts</option>
            <option value="misc">Misc</option>
          </Form.Control>
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
        className={styles.btn}
        variant="success"
      >
          Submit
      </Button>
    </Form>

  )
}

export default ReviewForm;