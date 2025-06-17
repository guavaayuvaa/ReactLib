const Department = require('../models/Department');
const Employee = require('../models/Employee');
const mongoose = require('mongoose');

exports.getDepartmentStats = async (req, res) => {
  try {
    const departmentId = req.params.id;
    const { page = 1, limit = 10 } = req.query;
    
    const department = await Department.findById(departmentId);
    if (!department) {
      return res.status(404).json({ error: 'Department not found' });
    }
    
    const stats = await Employee.aggregate([
      { $match: { department: mongoose.Types.ObjectId(departmentId) } },
      { $group: {
        _id: null,
        totalEmployees: { $sum: 1 },
        avgSalary: { $avg: '$salary' },
        minSalary: { $min: '$salary' },
        maxSalary: { $max: '$salary' }
      }}
    ]);
    
   
    const employees = await Employee.aggregate([
      { $match: { department: mongoose.Types.ObjectId(departmentId) } },
      { $lookup: {
        from: 'payrolls',
        let: { employeeId: '$_id' },
        pipeline: [
          { $match: { 
            $expr: { $eq: ['$employeeId', '$$employeeId'] },
            month: { $eq: new Date(new Date().getFullYear(), new Date().getMonth(), 1) }
          }},
          { $sort: { month: -1 } },
          { $limit: 1 }
        ],
        as: 'payroll'
      }},
      { $unwind: { path: '$payroll', preserveNullAndEmptyArrays: true } },
      { $sort: { 'payroll.netPay': -1 } },
      { $skip: (parseInt(page) - 1) * parseInt(limit) },
      { $limit: parseInt(limit) },
      { $project: {
        name: 1,
        email: 1,
        position: 1,
        salary: 1,
        netPay: '$payroll.netPay',
        payrollMonth: '$payroll.month'
      }}
    ]);
    
    res.json({
      department: department.name,
      stats: stats[0] || {
        totalEmployees: 0,
        avgSalary: 0,
        minSalary: 0,
        maxSalary: 0
      },
      employees,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit)
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};