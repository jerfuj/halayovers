import React, { useState } from 'react';
import Review from './Review.jsx';
import Hotel from './Hotel.jsx';
import FormModal from './FormModal.jsx';
import styles from './ReviewList.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ReviewList = ({ city, reviews, getCityReviews, hotelInfo, changeSort }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={styles.reviewsContainer}>
      <Hotel hotelInfo={hotelInfo}/>
      <FormModal
        city={city}
        show={show}
        handleClose={handleClose}
        getCityReviews={getCityReviews}
      />
      <div className={styles.btnAndSortContainer}>
        <Button variant="outline-dark" onClick={handleShow}>Write a Review!</Button>
        <Form.Control as="select" className={styles.select} onChange={(e) => {
          changeSort(e, city.airport_code);
        }}>
          <option value="recent">Most Recent</option>
          <option value="highestrated">Highest Rated</option>
          <option value="oldest">Oldest</option>
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