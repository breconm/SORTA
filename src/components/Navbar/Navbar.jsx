import React, { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-xl font-semibold font-mono text-gray-800 hover:text-blue-600 flex items-center">
          <i className="fa-solid fa-list-check pr-2 text-blue-500"></i>
          SORTA
        </a>

        {/* Hamburger icon (mobile only) */}
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
          <a href="#" className="hover:text-blue-600">Category</a>
          <a href="#" className="hover:text-blue-600">Store</a>
          <a href="#" className="hover:text-blue-600">Add Item</a>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 font-mono bg-white border-t shadow">
          <a href="#" className="block py-2 hover:text-blue-600">Category</a>
          <a href="#" className="block py-2 hover:text-blue-600">Store</a>
          <a href="#" className="block py-2 hover:text-blue-600">Add Item</a>
        </div>
      )}
    </nav>
      );
    };
export default Navbar