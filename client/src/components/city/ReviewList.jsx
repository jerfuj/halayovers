import React from 'react';
import Review from './Review.jsx';
import styles from './ReviewList.module.css';

const dummyReviews = ['review one', 'review two', 'review three', 'review four', 'review five'];

const ReviewList = () => {

  return (
    <div className={styles.reviewsContainer}>
      <h4>Reviews Header Goes Here</h4>
      <div>
        <button>Write a Review</button>
        dropdown to sort
      </div>
      <ul>
        {dummyReviews.map(review => (
          <Review review={review} />
        ))}
      </ul>
    </div>
  )
}

export default ReviewList;