import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import ReviewForm from './ReviewForm.jsx';

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

export default ModalForm;