import React, { useState } from 'react';

const Navbar = ({ currentTab, setCurrentTab }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const tabs = ['All Items', 'Category', 'Store', 'Add Item'];

  const handleClick = (tab) => {
    setCurrentTab(tab);
    setMenuOpen(false); // Close mobile menu on selection
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => handleClick('All Items')}
          className="text-xl font-semibold font-mono text-gray-800 hover:text-blue-600 flex items-center"
        >
          <i className="fa-solid fa-list-check pr-2 text-blue-500"></i>
          SORTA
        </button>

        {/* Hamburger icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-mono text-sm">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleClick(tab)}
              className={`hover:text-blue-600 ${
                currentTab === tab ? 'text-blue-600 font-bold' : 'text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 font-mono bg-white border-t shadow">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleClick(tab)}
              className={`block py-2 text-left w-full ${
                currentTab === tab ? 'text-blue-600 font-bold' : 'text-gray-700'
              } hover:text-blue-600`}
            >
              {tab}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
