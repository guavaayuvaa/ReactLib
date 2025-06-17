const Employee = require('../models/Employee');
const Department = require('../models/Department');
const Payroll = require('../models/Payroll');
const mongoose = require('mongoose');

exports.getEmployees = async (req, res) => {
  try {
    const { name, position, department, isActive, sort = 'name', order = 'asc', page = 1, limit = 10 } = req.query;
    
    const filter = {};
    if (name) filter.name = { $regex: name, $options: 'i' };
    if (position) filter.position = position;
    if (department) filter.department = department;
    if (isActive) filter.isActive = isActive === 'true';
    
    const sortOptions = {};
    sortOptions[sort] = order === 'desc' ? -1 : 1;
    
    const options = {
      page: parseInt(page),
      limit: parseInt(limit),
      sort: sortOptions,
      populate: 'department'
    };
    
    const result = await Employee.paginate(filter, options);
    
    res.json({
      data: result.docs,
      pagination: {
        page: result.page,
        limit: result.limit,
        total: result.totalDocs,
        pages: result.totalPages
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getEmployeeStatistics = async (req, res) => {
  try {
    const totalCount = await Employee.countDocuments();
    const activeCount = await Employee.countDocuments({ isActive: true });
    
    const positionStats = await Employee.aggregate([
      { $group: { 
        _id: '$position', 
        count: { $sum: 1 },
        avgSalary: { $avg: '$salary' },
        minSalary: { $min: '$salary' },
        maxSalary: { $max: '$salary' }
      }},
      { $sort: { count: -1 } }
    ]);
    
    const departmentStats = await Employee.aggregate([
      { $group: { 
        _id: '$department', 
        count: { $sum: 1 },
        avgSalary: { $avg: '$salary' }
      }},
      { $lookup: {
        from: 'departments',
        localField: '_id',
        foreignField: '_id',
        as: 'department'
      }},
      { $unwind: '$department' },
      { $project: {
        departmentName: '$department.name',
        count: 1,
        avgSalary: 1
      }},
      { $sort: { count: -1 } }
    ]);
    
    const salaryStats = await Employee.aggregate([
      { $group: {
        _id: null,
        avgSalary: { $avg: '$salary' },
        minSalary: { $min: '$salary' },
        maxSalary: { $max: '$salary' }
      }}
    ]);
    
    res.json({
      totalCount,
      activeCount,
      positionStats,
      departmentStats,
      overallSalary: salaryStats[0] || {}
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSalaryRanges = async (req, res) => {
  try {
    const salaryRanges = await Employee.aggregate([
      { $lookup: {
        from: 'departments',
        localField: 'department',
        foreignField: '_id',
        as: 'department'
      }},
      { $unwind: '$department' },
      { $group: {
        _id: '$department.name',
        minSalary: { $min: '$salary' },
        maxSalary: { $max: '$salary' },
        avgSalary: { $avg: '$salary' },
        count: { $sum: 1 }
      }},
      { $sort: { _id: 1 } }
    ]);
    
    res.json(salaryRanges);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.countDemo = async (req, res) => {
  try {
    // Test with a large collection
    const testFilter = { salary: { $gt: 50000 } };
    
    // countDocuments (accurate but slower with filters)
    const countStart = Date.now();
    const exactCount = await Employee.countDocuments(testFilter);
    const countTime = Date.now() - countStart;
    
    // estimatedDocumentCount (faster but no filters)
    const estimateStart = Date.now();
    const estimatedCount = await Employee.estimatedDocumentCount();
    const estimateTime = Date.now() - estimateStart;
    
    res.json({
      countDocuments: {
        count: exactCount,
        timeMs: countTime,
        description: 'Accurate count with filters'
      },
      estimatedDocumentCount: {
        count: estimatedCount,
        timeMs: estimateTime,
        description: 'Fast estimated count of all documents'
      },
      recommendation: 'Use estimatedDocumentCount when you need a fast approximate count of all documents. Use countDocuments when you need an accurate count with filters.'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};