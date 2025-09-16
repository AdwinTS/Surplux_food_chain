const express = require('express');
const { listFoodItems } = require('../controllers/foodController');
const router = express.Router();

router.get('/list', listFoodItems);

module.exports = router;
