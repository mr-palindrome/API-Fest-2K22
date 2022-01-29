const express = require('express');
const { addCategory, getCategory} = require('../controllers/category');
const router = express.Router();

const auth = require('../../middleware/auth');

router.get('/', getCategory);
router.post('/', addCategory);

module.exports = router;