import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const demoItems = [
  // Produce
  { id: 1, name: 'Apples', category: 'Produce' },
  { id: 2, name: 'Bananas', category: 'Produce' },
  { id: 3, name: 'Carrots', category: 'Produce' },
  { id: 4, name: 'Spinach', category: 'Produce' },

  // Household
  { id: 5, name: 'Toilet Paper', category: 'Household' },
  { id: 6, name: 'Laundry Detergent', category: 'Household' },
  { id: 7, name: 'Dish Soap', category: 'Household' },
  { id: 8, name: 'Paper Towels', category: 'Household' },

  // Personal Care
  { id: 9, name: 'Shampoo', category: 'Personal Care' },
  { id: 10, name: 'Toothpaste', category: 'Personal Care' },
  { id: 11, name: 'Body Wash', category: 'Personal Care' },
  { id: 12, name: 'Hand Sanitizer', category: 'Personal Care' },

  // Cosmetics
  { id: 13, name: 'Lipstick', category: 'Cosmetics' },
  { id: 14, name: 'Mascara', category: 'Cosmetics' },
  { id: 15, name: 'Foundation', category: 'Cosmetics' },
  { id: 16, name: 'Nail Polish', category: 'Cosmetics' },

  // Clothing and Shoes
  { id: 17, name: 'Jeans', category: 'Clothing and Shoes' },
  { id: 18, name: 'T-Shirt', category: 'Clothing and Shoes' },
  { id: 19, name: 'Sneakers', category: 'Clothing and Shoes' },
  { id: 20, name: 'Jacket', category: 'Clothing and Shoes' },

  // Hobbies
  { id: 21, name: 'Guitar Strings', category: 'Hobbies' },
  { id: 22, name: 'Paint Brushes', category: 'Hobbies' },
  { id: 23, name: 'Sketchbook', category: 'Hobbies' },
  { id: 24, name: 'Puzzle Set', category: 'Hobbies' },

  // Furniture
  { id: 25, name: 'Desk Chair', category: 'Furniture' },
  { id: 26, name: 'Coffee Table', category: 'Furniture' },
  { id: 27, name: 'Bookshelf', category: 'Furniture' },
  { id: 28, name: 'Bed Frame', category: 'Furniture' },

  // Electronics
  { id: 29, name: 'Headphones', category: 'Electronics' },
  { id: 30, name: 'Smartphone', category: 'Electronics' },
  { id: 31, name: 'Laptop', category: 'Electronics' },
  { id: 32, name: 'Bluetooth Speaker', category: 'Electronics' },

  // Other
  { id: 33, name: 'Umbrella', category: 'Other' },
  { id: 34, name: 'Water Bottle', category: 'Other' },
  { id: 35, name: 'Backpack', category: 'Other' },
  { id: 36, name: 'Sunglasses', category: 'Other' },
];

const categories = [
  'Produce',
  'Household',
  'Personal Care',
  'Cosmetics',
  'Clothing and Shoes',
  'Hobbies',
  'Furniture',
  'Electronics',
  'Other',
];

function Category() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredItems =
    selectedCategory === ''
      ? demoItems
      : demoItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Browse by Category</h1>

      {/* Dropdown Filter */}
      <div className="mb-6 flex justify-center">
        <select
          className="border rounded-lg px-4 py-2 shadow"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Items */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow p-4 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-700">
                {item.name}
              </h2>
              <p className="text-sm text-gray-500">{item.category}</p>
            </div>

            <div className="mt-4 flex justify-between items-center">
              {/* Link to item details */}
              <Link
                to={`/item/${item.id}`}
                className="text-blue-600 hover:underline text-sm"
              >
                View Details
              </Link>

              {/* Edit/Delete Buttons */}
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-yellow-400 text-white rounded-lg text-sm hover:bg-yellow-500">
                  Edit
                </button>
                <button className="px-3 py-1 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <p className="text-center text-gray-500 mt-10 italic">
          No items found in this category.
        </p>
      )}
    </div>
  );
}

export default Category;