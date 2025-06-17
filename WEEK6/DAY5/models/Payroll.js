const mongoose = require('mongoose');

const payrollSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true
  },
  month: {
    type: Date,
    required: true
  },
  basicSalary: {
    type: Number,
    required: true,
    min: 0
  }, 
  bonuses: {
    type: Number,
    default: 0
  },
  deductions: {
    type: Number,
    default: 0
  },
  netPay: {
    type: Number,
    required: true,
    min: 0
  }
}, { timestamps: true });

payrollSchema.index({ employeeId: 1 });
payrollSchema.index({ month: 1 });

module.exports = mongoose.model('Payroll', payrollSchema);