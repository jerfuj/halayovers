import React from 'react';
import EditForm from './EditForm.jsx';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';

const EditFormModal = ({ review, show, setShowEditForm, getCityReviews }) => {

  return (
    <Modal show={show} onHide={() => {setShowEditForm(false)}} size="md" centered>
      <Modal.Header>
        <Modal.Title>
          Edit post
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EditForm
          review={review}
          setShowEditForm={setShowEditForm}
          getCityReviews={getCityReviews}
        />
      </Modal.Body>
    </Modal>
  )
}

EditFormModal.propTypes = {
  review: PropTypes.instanceOf(Object).isRequired,
  setShowEditForm: PropTypes.instanceOf(Function).isRequired,
  getCityReviews: PropTypes.instanceOf(Function).isRequired,
  show: PropTypes.bool.isRequired
}

export default EditFormModal;