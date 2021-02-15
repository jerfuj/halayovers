import React, { useState } from 'react';
import Review from './Review.jsx';
import styles from './ReviewList.module.css';
import FormModal from './FormModal.jsx';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

const ReviewList = ({ city, reviews, getCityReviews }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={styles.reviewsContainer}>
      <FormModal
        city={city}
        show={show}
        handleClose={handleClose}
        getCityReviews={getCityReviews}
      />
      <div className={styles.btnAndSortContainer}>
        <Button variant="outline-dark" onClick={handleShow}>Write a Review!</Button>
        <Form.Control as="select" className={styles.select}>
          <option>Most Recent</option>
          <option>Highest Rated</option>
          <option>Oldest</option>
        </Form.Control>
      </div>
      <ul className={styles.list}>
        {reviews.map(review => (
          <Review review={review} />
        ))}
      </ul>
    </div>
  )
}

export default ReviewList;