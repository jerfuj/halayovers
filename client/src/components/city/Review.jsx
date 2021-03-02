import React, { useState } from 'react';
import $ from 'jquery';
import EditFormModal from './EditFormModal.jsx';
import styles from './Review.module.css';
import TimeAgo from 'react-timeago';
import PropTypes from 'prop-types';

const Review = ({ review, getCityReviews }) => {
  const categories = JSON.parse(review.categories);
  const [btnDisable, setBtnDisable] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  const upVote = () => {
    $.ajax({
      method: 'PATCH',
      url: `https://peaceful-oasis-17394.herokuapp.com/api/review/${review.id}/upvote`,
      success: () => {
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
      url: `https://peaceful-oasis-17394.herokuapp.com/api/review/${review.id}/delete`,
      success: () => {
        getCityReviews();
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  const showEditAndDeleteButtons = () => {
    const token = JSON.parse(sessionStorage.getItem('token'));
    if (token.emp_number === review.fa_id) {
      return (
        <div className={styles.editAndDelete}>
          <button
              onClick={() => {setShowEditForm(true)}}
              className={styles.btn}
            >
              Edit
          </button>
          <button
            className={styles.btn}
            onClick={deleteReview}
          >
            Delete
          </button>
        </div>
      )
    }
    return null;
  }

  console.log(review.date);

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
        <button
          onClick={upVote}
          className={styles.btn}
          disabled={btnDisable}
        >
          Useful {review.upvotes}
        </button>
        {showEditAndDeleteButtons()}
        <EditFormModal
          review={review}
          show={showEditForm}
          setShowEditForm={setShowEditForm}
          getCityReviews={getCityReviews}
        />
      </div>
    </li>
  )
}

Review.propTypes = {
  review: PropTypes.instanceOf(Object).isRequired,
  getCityReviews: PropTypes.instanceOf(Function).isRequired,
}

export default Review;