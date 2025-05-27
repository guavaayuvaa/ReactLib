const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/sessionController');

router.get('/:userId', sessionController.getSessions);

module.exports = router;
