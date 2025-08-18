import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const demoItems = [
  { id: 1, name: "Apples", category: "Produce" },
  { id: 2, name: "Bananas", category: "Produce" },
  { id: 3, name: "Carrots", category: "Produce" },
  { id: 4, name: "Spinach", category: "Produce" },
  { id: 5, name: "Toilet Paper", category: "Household" },
  { id: 6, name: "Laundry Detergent", category: "Household" },
  { id: 7, name: "Dish Soap", category: "Household" },
  { id: 8, name: "Paper Towels", category: "Household" },
  { id: 9, name: "Shampoo", category: "Personal Care" },
  { id: 10, name: "Toothpaste", category: "Personal Care" },
  { id: 11, name: "Body Wash", category: "Personal Care" },
  { id: 12, name: "Hand Sanitizer", category: "Personal Care" },
  { id: 13, name: "Lipstick", category: "Cosmetics" },
  { id: 14, name: "Mascara", category: "Cosmetics" },
  { id: 15, name: "Foundation", category: "Cosmetics" },
  { id: 16, name: "Nail Polish", category: "Cosmetics" },
  { id: 17, name: "Jeans", category: "Clothing and Shoes" },
  { id: 18, name: "T-Shirt", category: "Clothing and Shoes" },
  { id: 19, name: "Sneakers", category: "Clothing and Shoes" },
  { id: 20, name: "Jacket", category: "Clothing and Shoes" },
  { id: 21, name: "Guitar Strings", category: "Hobbies" },
  { id: 22, name: "Paint Brushes", category: "Hobbies" },
  { id: 23, name: "Sketchbook", category: "Hobbies" },
  { id: 24, name: "Puzzle Set", category: "Hobbies" },
  { id: 25, name: "Desk Chair", category: "Furniture" },
  { id: 26, name: "Coffee Table", category: "Furniture" },
  { id: 27, name: "Bookshelf", category: "Furniture" },
  { id: 28, name: "Bed Frame", category: "Furniture" },
  { id: 29, name: "Headphones", category: "Electronics" },
  { id: 30, name: "Smartphone", category: "Electronics" },
  { id: 31, name: "Laptop", category: "Electronics" },
  { id: 32, name: "Bluetooth Speaker", category: "Electronics" },
  { id: 33, name: "Umbrella", category: "Other" },
  { id: 34, name: "Water Bottle", category: "Other" },
  { id: 35, name: "Backpack", category: "Other" },
  { id: 36, name: "Sunglasses", category: "Other" },
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#A28EFF",
  "#FF6699",
  "#33CCFF",
  "#FF9933",
  "#66CC66",
];

function Category() {
  const [selectedCategory, setSelectedCategory] = useState("");

  // Count per category
  const categoryCounts = demoItems.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.entries(categoryCounts).map(([name, value]) => ({
    name,
    value,
  }));

  if (!chartData.length) {
    return <p className="text-center mt-10">No data available</p>;
  }

  const filteredItems = selectedCategory
    ? demoItems.filter((item) => item.category === selectedCategory)
    : demoItems;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Categories</h2>

      {/* Pie Chart */}
      <div className="h-80 mb-8">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              outerRadius={120}
              label
            >
              {chartData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Dropdown */}
      <div className="mb-6 flex justify-center">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border p-2 rounded-md shadow"
        >
          <option value="">All Categories</option>
          {Object.keys(categoryCounts).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="p-4 border rounded-lg shadow flex flex-col justify-between"
          >
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.category}</p>
            <div className="mt-3 flex gap-2">
              <Link
                to={`/item/${item.id}`}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
              >
                View
              </Link>
              <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 text-sm">
                Edit
              </button>
              <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;