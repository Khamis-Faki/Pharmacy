import React, { useState } from 'react';
import './AddMedicine.css';
import ViewMedicine from './ViewMedicine';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8088/api/v1/medicines', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(medicine),
      });

      if (response.ok) {
        alert('Medicine added successfully');
        setMedicine({
          name: '',
          quantity: '',
          price: '',
          type: '',
          expireDate: ''
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
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

export default  AddMedicine;
