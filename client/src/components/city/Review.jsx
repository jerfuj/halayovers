import React, { useState } from 'react';
import $ from 'jquery';
import dateFormat from 'dateformat';
import styles from './Review.module.css';
import Button from 'react-bootstrap/Button'
import TimeAgo from 'react-timeago';

const Review = ({review}) => {
  const categories = JSON.parse(review.categories);
  const date = dateFormat(review.date, 'shortDate')
  const [btnDisable, setBtnDisable] = useState(false);

  const upVote = () => {
    $.ajax({
      method: 'PATCH',
      url: `http://localhost:3000/api/review/${review.id}/upvote`,
      success: (res) => {
        setBtnDisable(true);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  return (
    <li className={styles.reviewContainer}>
      <div className={styles.nameAndDate} >
        <div className={styles.name}>
          {review.fa_name}
        </div>
        <div className={styles.date}>
          <TimeAgo date={review.date} />
        </div>
      </div>
      <div className={styles.categories}>
        <i>Category:</i> {categories.join(', ')}
      </div>
      <div className={styles.text}>
        <i>Tip:</i> {review.review_text}
      </div>
      <div className={styles.upvotes}>
        <Button
          variant="outline-primary"
          size="sm"
          onClick={upVote}
          disabled={btnDisable}
        >
          useful
        </Button>
      </div>
    </li>
  )
}

export default Review;