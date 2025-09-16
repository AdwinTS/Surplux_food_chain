import React from 'react';
import Navbar from './Navbar';
import FoodListings from './Foodlisting';
function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
          🍴 Available Surplus Food
        </h2>
        <FoodListings />
      </main>
    </div>
  );
}

export default App;
