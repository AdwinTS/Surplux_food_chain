const FoodItem = require('../models/FoodItem');

exports.listFoodItems = async (req, res) => {
  try {
    const items = await FoodItem.find({ status: 'available' });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
