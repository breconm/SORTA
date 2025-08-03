import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold font-mono text-gray-800 hover:text-blue-600 flex items-center">
          <i className="fa-solid fa-list-check pr-2 text-blue-500"></i>
          SORTA
        </Link>
        <div className="hidden md:flex space-x-6 font-mono text-sm">
          {/* Links for guests */}
          {!isLoggedIn && (
            <>
              <Link to="/" className="hover:text-blue-600 text-gray-800">Home</Link>
              <Link to="/about" className="hover:text-blue-600 text-gray-800">About</Link>
              <Link to="/contact" className="hover:text-blue-600 text-gray-800">Contact</Link>
              <Link to="/signup" className="hover:text-blue-600 text-gray-800">Sign Up</Link>
              <Link to="/login" className="hover:text-blue-600 text-gray-800">Login</Link>
            </>
          )}
          {/* Links for logged-in users */}
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
    </nav>
  );
};

export default Navbar;