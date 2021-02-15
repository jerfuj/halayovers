import React from 'react';
import dateFormat from 'dateformat';
import styles from './Review.module.css';

const Review = ({review}) => {
  const categories = JSON.parse(review.categories);
  const date = dateFormat(review.date, 'shortDate')
  return (
    <li className={styles.reviewContainer}>
      <div className={styles.nameAndDate} >
        <div className={styles.name}>
          {review.fa_name}
        </div>
        <div className={styles.date}>
          {date}
        </div>
      </div>
      <div className={styles.categories}>
        <b>Category:</b> {categories.join(', ')}
      </div>
      <div className={styles.text}>
        <b>Pro Tip:</b> {review.review_text}
      </div>
      <div className={styles.upvotes}>
        <button>
          useful {review.upvotes}
        </button>
      </div>
    </li>
  )
}

export default Review;