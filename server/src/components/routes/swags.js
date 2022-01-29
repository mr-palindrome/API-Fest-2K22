const express = require('express');
const { getSwags, createSwag, getSwag, updateSwag, deleteSwag, getUserSwags, getCategorySwags} = require('../controllers/swags');
const router = express.Router();

const auth = require('../../middleware/auth');

router.get('/', getSwags);
router.get('/owner/:id', getUserSwags);
router.get('/category/:id', getCategorySwags);
router.post('/', createSwag);
router.get('/:id', getSwag);
router.put('/:id', updateSwag);
router.delete('/:id', deleteSwag);

module.exports = router;