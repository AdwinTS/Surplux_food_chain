import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold tracking-wide">
          Surplus Food Chain
        </h1>
        <ul className="hidden md:flex space-x-6 font-medium">
          <li className="hover:text-yellow-300 cursor-pointer transition">Home</li>
          <li className="hover:text-yellow-300 cursor-pointer transition">About</li>
          <li className="hover:text-yellow-300 cursor-pointer transition">Donate</li>
          <li className="hover:text-yellow-300 cursor-pointer transition">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
