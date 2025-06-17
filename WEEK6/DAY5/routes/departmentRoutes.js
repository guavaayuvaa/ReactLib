const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/departmentController');


router.get('/:id/employees/stats', departmentController.getDepartmentStats);

module.exports = router;