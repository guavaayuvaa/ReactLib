const Department = require('../models/Department');

exports.createDepartment = async (req, res, next) => {
  try {
    const department = new Department(req.body);
    await department.save();
    res.status(201).json(department);
  } catch (err) {
    next(err);
  }
};

exports.getDepartments = async (req, res, next) => {
  try {
    const departments = await Department.find();
    res.status(200).json(departments);
  } catch (err) {
    next(err);
  }
};
