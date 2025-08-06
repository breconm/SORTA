import { useState } from 'react';

function AddItem() {
  const [item, setItem] = useState({
    name: '',
    category: '',
    store: '',
    storeUrl: '',
    quantity: 1,
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Item submitted:', item);
    alert('Item added!');
    setItem({
      name: '',
      category: '',
      store: '',
      storeUrl: '',
      quantity: 1,
      notes: ''
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">ADD ITEM</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter item name"
            value={item.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select
            id="category"
            name="category"
            value={item.category}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 px-4 py-2 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select category</option>
            <option value="Food">Food</option>
            <option value="Household">Household</option>
            <option value="Personal Care">Personal Care</option>
            <option value="Cosmetics">Cosmetics</option>
            <option value="Clothing and Shoes">Clothing and Shoes</option>
            <option value="Hobbies">Hobbies</option>
            <option value="Furniture">Furniture</option>
            <option value="Electronics">Electronics</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="store" className="block text-sm font-medium text-gray-700 mb-1">Store</label>
          <input
            type="text"
            id="store"
            name="store"
            placeholder="Enter store name"
            value={item.store}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="storeUrl" className="block text-sm font-medium text-gray-700 mb-1">Store URL</label>
          <input
            type="url"
            id="storeUrl"
            name="storeUrl"
            placeholder="Optional URL"
            value={item.storeUrl}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            placeholder="1"
            value={item.quantity}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
          <textarea
            id="notes"
            name="notes"
            placeholder="Optional notes"
            value={item.notes}
            onChange={handleChange}
            rows="3"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddItem;
