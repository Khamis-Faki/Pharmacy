import React, { useState } from 'react';
import AddMedicine from './AddMedicine';
import ViewMedicine from './ViewMedicine';

function MedicineManager() {
  const [medicines, setMedicines] = useState([]);

  const addMedicine = (newMedicine) => {
    setMedicines([...medicines, newMedicine]);
  };

  return (
    <div>
      <AddMedicine addMedicine={addMedicine} />
      <ViewMedicine medicines={medicines} />
    </div>
  );
}

export default MedicineManager;
