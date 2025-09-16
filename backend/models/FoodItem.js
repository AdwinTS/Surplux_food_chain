const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
  title: String,
  description: String,
  quantity: Number,
  location: String,
  expiry_date: Date,
  status: { type: String, default: 'available' },
  donor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('FoodItem', foodItemSchema);
