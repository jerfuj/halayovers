import React, { useState } from 'react';
import $ from 'jquery';
import dateFormat from 'dateformat';
import styles from './Review.module.css';
import Button from 'react-bootstrap/Button'
import TimeAgo from 'react-timeago';

const Review = ({review, getCityReviews}) => {
  const categories = JSON.parse(review.categories);
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

  const deleteReview = () => {
    $.ajax({
      method: 'DELETE',
      url: `http://localhost:3000/api/review/${review.id}/delete`,
      success: (res) => {
        console.log('DELETED!')
        getCityReviews();
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
          <TimeAgo live={false} date={review.date} />
        </div>
      </div>
      <div className={styles.categories}>
        <span className={styles.category}>Category:</span> {categories.join(', ')}
      </div>
      <div className={styles.text}>
        {review.review_text}
      </div>
      <div className={styles.buttons}>
        {/* <Button
          variant="outline-primary"
          size="sm"
          onClick={upVote}
          disabled={btnDisable}
        >
          useful
        </Button> */}
        <button
          onClick={upVote}
          className={styles.btn}
          disabled={btnDisable}
        >
          Useful
        </button>
        <button
          onClick={deleteReview}
          className={styles.btn}
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default Review;