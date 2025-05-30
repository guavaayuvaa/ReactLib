const express = require('express');
const router = express.Router();
const { createDepartment } = require('../controllers/departmentController');

router.post('/', createDepartment);

module.exports = router;

