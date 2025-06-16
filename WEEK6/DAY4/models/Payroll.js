const mongoose = require('mongoose');

const payrollSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  baseSalary: Number,
  bonus: Number,
  deductions: Number,
  netPay: Number
}, {
  timestamps: true
});

payrollSchema.pre('save', function (next) {
  this.netPay = this.baseSalary + this.bonus - this.deductions;
  next();
});

module.exports = mongoose.model('Payroll', payrollSchema);
