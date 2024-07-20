import React, { useState, useEffect } from 'react';

import './ViewMedicine.css';

function ViewMedicine() {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const response = await fetch('http://localhost:8088/api/v1/medicines');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMedicines(data);
      } catch (error) {
        console.error('Error fetching medicines:', error);
      }
    };

    fetchMedicines();
  }, []);

  return (
    <div className="view-medicine-container">
      
      <h2>Medicines Inventory</h2>
      <table className="view-medicine-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Expire Date</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((medicine) => (
            <tr key={medicine.id}>
              <td>{medicine.name}</td>
              <td>{medicine.type}</td>
              <td>{medicine.quantity}</td>
              <td>{medicine.price}</td>
              <td>{medicine.expireDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewMedicine;
