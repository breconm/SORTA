import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn }) => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu visibility

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-semibold font-mono text-gray-800 hover:text-blue-600 flex items-center">
          <i className="fa-solid fa-list-check pr-2 text-blue-500"></i>
          SORTA
        </Link>

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
          {!isLoggedIn && (
            <>
              <Link to="/" className="hover:text-blue-600 text-gray-800">Home</Link>
              <Link to="/about" className="hover:text-blue-600 text-gray-800">About</Link>
              <Link to="/contact" className="hover:text-blue-600 text-gray-800">Contact</Link>
              <Link to="/signup" className="hover:text-blue-600 text-gray-800">Sign Up</Link>
              <Link to="/login" className="hover:text-blue-600 text-gray-800">Login</Link>
            </>
          )}
          {isLoggedIn && (
            <>
              <Link to="/" className="hover:text-blue-600 text-gray-800">Home</Link>
              <Link to="/add-items" className="hover:text-blue-600 text-gray-800">Add Items</Link>
              <Link to="/category" className="hover:text-blue-600 text-gray-800">Category</Link>
              <Link to="/store" className="hover:text-blue-600 text-gray-800">Store</Link>
              <Link to="/settings" className="hover:text-blue-600 text-gray-800">Settings</Link>
              <Link to="/about" className="hover:text-blue-600 text-gray-800">About</Link>
              <Link to="/contact" className="hover:text-blue-600 text-gray-800">Contact</Link>
              <Link to="/signout" className="hover:text-blue-600 text-gray-800">Sign Out</Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md p-4 space-y-4 font-mono text-sm">
          {!isLoggedIn && (
            <>
              <Link to="/" className="block hover:text-blue-600 text-gray-800" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/about" className="block hover:text-blue-600 text-gray-800" onClick={() => setMenuOpen(false)}>About</Link>
              <Link to="/contact" className="block hover:text-blue-600 text-gray-800" onClick={() => setMenuOpen(false)}>Contact</Link>
              <Link to="/signup" className="block hover:text-blue-600 text-gray-800" onClick={() => setMenuOpen(false)}>Sign Up</Link>
              <Link to="/login" className="block hover:text-blue-600 text-gray-800" onClick={() => setMenuOpen(false)}>Login</Link>
            </>
          )}
          {isLoggedIn && (
            <>
              <Link to="/" className="block hover:text-blue-600 text-gray-800" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/add-items" className="block hover:text-blue-600 text-gray-800" onClick={() => setMenuOpen(false)}>Add Items</Link>
              <Link to="/category" className="block hover:text-blue-600 text-gray-800" onClick={() => setMenuOpen(false)}>Category</Link>
              <Link to="/store" className="block hover:text-blue-600 text-gray-800" onClick={() => setMenuOpen(false)}>Store</Link>
              <Link to="/settings" className="block hover:text-blue-600 text-gray-800" onClick={() => setMenuOpen(false)}>Settings</Link>
              <Link to="/about" className="block hover:text-blue-600 text-gray-800" onClick={() => setMenuOpen(false)}>About</Link>
              <Link to="/contact" className="block hover:text-blue-600 text-gray-800" onClick={() => setMenuOpen(false)}>Contact</Link>
              <Link to="/signout" className="block hover:text-blue-600 text-gray-800" onClick={() => setMenuOpen(false)}>Sign Out</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;