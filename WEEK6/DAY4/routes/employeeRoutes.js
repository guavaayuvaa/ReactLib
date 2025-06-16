const express = require('express');
const router = express.Router();
const { bulkInsert } = require('../controllers/employeeController');

router.post('/bulk-insert', bulkInsert);

module.exports = router;
