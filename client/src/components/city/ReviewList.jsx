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

  const [sortOption, setSortOption] = useState('recent')
  const [categorySort, setCategorySort] = useState(null);

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
        <Form.Control
          as="select"
          className={styles.select}
          onChange={(e) => {
            setSortOption(e.target.value);
            changeSort(e, city.airport_code, e.target.value, categorySort);
          }}
        >
          <option value="recent">Most Recent</option>
          <option value="highestrated">Highest Rated</option>
          <option value="oldest">Oldest</option>
        </Form.Control>
      </div>
      <div className={styles.filterCategory}>
        <Button
          onClick={(e) => {
            setCategorySort(e.target.value);
            changeSort(e, city.airport_code, sortOption, e.target.value)
          }}
          className={styles.btn}
          value="null"
        >
          All
        </Button>
        <Button
          onClick={(e) => {
            setCategorySort(e.target.value);
            changeSort(e, city.airport_code, sortOption, e.target.value)
          }}
          className={styles.btn}
          value="Food"
        >
          Food
        </Button>
        <Button
          onClick={(e) => {
            setCategorySort(e.target.value);
            changeSort(e, city.airport_code, sortOption, e.target.value)
          }}
          className={styles.btn}
          value="Sightseeing"
        >
          Sightseeing
        </Button>
        <Button
          onClick={(e) => {
            setCategorySort(e.target.value);
            changeSort(e, city.airport_code, sortOption, e.target.value)
          }}
          className={styles.btn}
          value="Hotel"
        >
          Hotel
        </Button>
        <Button
          onClick={(e) => {
            setCategorySort(e.target.value);
            changeSort(e, city.airport_code, sortOption, e.target.value)
          }}
          className={styles.btn}
          value="Airport"
        >
          Airport
        </Button>
        <Button
          onClick={(e) => {
            setCategorySort(e.target.value);
            changeSort(e, city.airport_code, sortOption, e.target.value)
          }}
          className={styles.btn}
          value="Discounts"
        >
          Discounts
        </Button>
        <Button
          onClick={(e) => {
            setCategorySort(e.target.value);
            changeSort(e, city.airport_code, sortOption, e.target.value)
          }}
          className={styles.btn}
          value="Misc"
        >
          Misc
        </Button>
      </div>
      <ul className={styles.list}>
        {reviews.map(review => (
          <Review key={review.id} review={review} getCityReviews={getCityReviews}/>
        ))}
      </ul>
    </div>
  )
}

export default ReviewList;