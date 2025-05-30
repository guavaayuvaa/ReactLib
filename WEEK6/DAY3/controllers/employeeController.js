const Employee = require('../models/Employee');

exports.createEmployee = async (req, res, next) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json(employee);
  } catch (err) {
    next(err);
  }
};

exports.getEmployees = async (req, res, next) => {
  try {
    const employees = await Employee.find().populate('departmentId');
    res.status(200).json(employees);
  } catch (err) {
    next(err);
  }
};
