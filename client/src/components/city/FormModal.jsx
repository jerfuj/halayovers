import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ReviewForm from './ReviewForm.jsx';
import PropTypes from 'prop-types';

const ModalForm = ({ city, show, handleClose, getCityReviews }) => {
  return (
    <Modal show={show} onHide={handleClose} size="md" centered>
      <Modal.Header>
        <Modal.Title>
          Share your experience!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ReviewForm city={city} handleClose={handleClose} getCityReviews={getCityReviews}/>
      </Modal.Body>
    </Modal>
  )
}

ModalForm.propTypes = {
  city: PropTypes.instanceOf(Object).isRequired,
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.instanceOf(Function).isRequired,
  getCityReviews: PropTypes.instanceOf(Function).isRequired,
}

export default ModalForm;