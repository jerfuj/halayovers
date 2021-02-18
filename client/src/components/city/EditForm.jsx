import React, {useState} from 'react';
import $ from 'jquery';
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const EditForm = ({ review, setShowEditForm, getCityReviews }) => {
  const [name, setName] = useState(review.fa_name);
  const [categories, setCategories] = useState(JSON.parse(review.categories));
  const [text, setText] = useState(review.review_text);
  const airportCode = review.airport_code;

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowEditForm(false);
    $.ajax({
      traditional: true,
      method: 'PATCH',
      url: `http://localhost:3000/api/cities/review/${review.id}`,
      data: {
        name,
        categories,
        text
      },
      success: (res) => {
        setShowEditForm(false);
        getCityReviews();
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handleDateChange = (e) => {
    setDate(e.target.value);
  }
  const handleCategoriesChange = (e) => {
    let selected = Array.from(e.target.selectedOptions);
    selected = selected.map(select => (
      select.innerHTML
    ))
    setCategories(selected);
  }
  const handleTextChange = (e) => {
    setText(e.target.value);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" onChange={handleNameChange} defaultValue={name} required/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Categories</Form.Label>
          <Form.Control
            as="select"
            multiple
            onChange={handleCategoriesChange}
            defaultValue={categories}
            required
          >
            <option value="Food">Food</option>
            <option value="Sightseeing">Sightseeing</option>
            <option value="Hotel">Hotel</option>
            <option value="Airport">Airport</option>
            <option value="Discounts">Discounts</option>
            <option value="Shopping">Shopping</option>
            <option value="Flight">Flight</option>
            <option value="Misc">Misc</option>
          </Form.Control>
          <Form.Text className="text-muted">
            To select multiple: hold down command (mac) or ctrl (windows)
          </Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Control as="textarea" rows={5}
          placeholder="Tell us about it!"
          onChange={handleTextChange}
          defaultValue={text}
          required
        />
      </Form.Group>
      <Button
        type="submit"
        variant="success"
      >
          Submit
      </Button>
    </Form>

  )
}

export default EditForm;