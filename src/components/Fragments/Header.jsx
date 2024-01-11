// src/Header.js
// eslint-disable-next-line no-unused-vars
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl font-bold">Your Logo</span>
        </div>
        <nav className="space-x-4">
          <a href="./login" className="hover:text-gray-300">
            Login
          </a>
          <a href="./newlogin" className="hover:text-gray-300">
            New Login
          </a>
          <a href="./register" className="hover:text-gray-300">
            Register
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
