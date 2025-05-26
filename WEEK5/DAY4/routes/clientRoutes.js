const express = require('express');
const router = express.Router();
const { createClient, getClient } = require('../controllers/clientController');

router.post('/', createClient);
router.get('/:id', getClient);

module.exports = router;
