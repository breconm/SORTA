import React from 'react';
import { useParams } from 'react-router-dom';

function ItemDetails() {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow">
        <h1 className="text-2xl font-bold mb-4">Item Details</h1>
        <p>Showing details for item ID: {id}</p>
        {/* Later: fetch actual item details */}
      </div>
    </div>
  );
}

export default ItemDetails;