import React from 'react';
import Review from './Review.jsx';
import styles from './ReviewList.module.css';

const dummyReviews = ['review one', 'review two', 'review three', 'review four', 'review five'];

const ReviewList = () => {

  return (
    <div className={styles.reviewsContainer}>
      <h4>Reviews Header Goes Here</h4>
      <div className={styles.btnAndSortContainer}>
        <button>Write a Review</button>
        <select>
          <option>Most Recent</option>
          <option>Highest Rated</option>
          <option>Oldest</option>
        </select>
      </div>
      <ul className={styles.list}>
        {dummyReviews.map(review => (
          <li className={styles.review}>
            <Review review={review} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ReviewList;