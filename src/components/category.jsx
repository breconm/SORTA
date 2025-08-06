
import React from 'react';

const demoItems = [
  { name: 'Apples', category: 'Food' },
  { name: 'Toilet Paper', category: 'Household' },
  { name: 'Shampoo', category: 'Personal Care' },
  { name: 'Lipstick', category: 'Cosmetics' },
  { name: 'Jeans', category: 'Clothing and Shoes' },
  { name: 'Guitar Strings', category: 'Hobbies' },
  { name: 'Desk Chair', category: 'Furniture' },
  { name: 'Headphones', category: 'Electronics' },
  { name: 'Umbrella', category: 'Other' },
];

const categories = [
  'Food',
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
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Sort by Category</h1>

      <div className="space-y-8">
        {categories.map((cat) => {
          const filtered = demoItems.filter(item => item.category === cat);
          return (
            <div key={cat}>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">{cat}</h2>
              {filtered.length > 0 ? (
                <ul className="list-disc list-inside pl-4">
                  {filtered.map((item, i) => (
                    <li key={i} className="text-gray-800">{item.name}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 italic">No items yet.</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
