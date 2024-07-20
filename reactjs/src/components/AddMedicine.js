import React, { useState } from 'react';
import './AddMedicine.css';

function AddMedicine() {
  const [medicine, setMedicine] = useState({
    name: '',
    quantity: '',
    price: '',
    type: '',
    expireDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicine({
      ...medicine,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send the data to the backend or update the state
    console.log('Medicine added:', medicine);
    // Clear the form
    setMedicine({
      name: '',
      quantity: '',
      price: '',
      type: '',
      expireDate: ''
    });
  };

  return (
    <div className="add-medicine-container">
      <h2>Add New Medicine</h2>
      <form onSubmit={handleSubmit} className="add-medicine-form">
        <div className="form-group">
          <label htmlFor="name">Medicine Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={medicine.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Medicine Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={medicine.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Medicine Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={medicine.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Medicine Type:</label>
          <input
            type="text"
            id="type"
            name="type"
            value={medicine.type}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expireDate">Expire Date:</label>
          <input
            type="date"
            id="expireDate"
            name="expireDate"
            value={medicine.expireDate}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Add Medicine</button>
      </form>
    </div>
  );
}

export default AddMedicine;
