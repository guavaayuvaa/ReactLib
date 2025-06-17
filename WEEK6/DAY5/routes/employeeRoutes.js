const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');


router.get('/', employeeController.getEmployees);


router.get('/statistics', employeeController.getEmployeeStatistics);


router.get('/salary-range', employeeController.getSalaryRanges);


router.get('/count-demo', employeeController.countDemo);

module.exports = router;