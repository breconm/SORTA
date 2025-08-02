import React, { useState } from 'react';

const Navbar = ({ currentTab, setCurrentTab, isLoggedIn }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = (tabName) =>
    `cursor-pointer hover:text-blue-600 ${
      currentTab === tabName ? 'text-blue-600 font-semibold' : 'text-gray-800'
    }`;

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <span
          onClick={() => setCurrentTab('Home')}
          className="text-xl font-semibold font-mono text-gray-800 hover:text-blue-600 flex items-center cursor-pointer"
        >
          <i className="fa-solid fa-list-check pr-2 text-blue-500"></i>
          SORTA
        </span>

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
          <span onClick={() => setCurrentTab('Home')} className={linkStyle('Home')}>
            Home
          </span>
          {isLoggedIn ? (
            <>
              <span onClick={() => setCurrentTab('Add Item')} className={linkStyle('Add Item')}>
                Add Item
              </span>
              <span onClick={() => setCurrentTab('Category')} className={linkStyle('Category')}>
                Category
              </span>
              <span onClick={() => setCurrentTab('Store')} className={linkStyle('Store')}>
                Store
              </span>
              <span onClick={() => setCurrentTab('Settings')} className={linkStyle('Settings')}>
                Settings
              </span>
              <span onClick={() => setCurrentTab('About')} className={linkStyle('About')}>
                About
              </span>
              <span onClick={() => setCurrentTab('Contact')} className={linkStyle('Contact')}>
                Contact
              </span>
              <span onClick={() => setCurrentTab('Logout')} className={linkStyle('Logout')}>
                Sign Out
              </span>
            </>
          ) : (
            <>
              <span onClick={() => setCurrentTab('About')} className={linkStyle('About')}>
                About
              </span>
              <span onClick={() => setCurrentTab('Contact')} className={linkStyle('Contact')}>
                Contact
              </span>
              <span onClick={() => setCurrentTab('Signup')} className={linkStyle('Signup')}>
                Sign Up
              </span>
              <span onClick={() => setCurrentTab('Login')} className={linkStyle('Login')}>
                Login
              </span>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;