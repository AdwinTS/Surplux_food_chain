import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FoodListings() {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/food/list')
      .then(res => setFoodItems(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {foodItems.map(item => (
        <div
          key={item._id}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transform hover:-translate-y-1 transition duration-300"
        >
          {/* Food image (use item.image if your API has one) */}
          <div className="h-44 bg-gradient-to-r from-yellow-200 to-orange-300 flex items-center justify-center">
            <span className="text-6xl">🍲</span>
          </div>

          {/* Food details */}
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h2>
            <p className="text-gray-600 text-sm mb-4">{item.description}</p>
            
            <div className="flex justify-between text-sm text-gray-700 mb-4">
              <span><strong>Qty:</strong> {item.quantity}</span>
              <span><strong>Expires:</strong> {new Date(item.expiry_date).toLocaleDateString()}</span>
            </div>

            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2.5 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-600 transition">
              Claim Food
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FoodListings;
