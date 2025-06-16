const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  salary: Number,
  password: { type: String, select: false },
  joiningDate: {
    type: Date,
    default: Date.now,
    get: val => val.toISOString().split('T')[0]
  }
}, {
  toJSON: { virtuals: true, getters: true },
  toObject: { virtuals: true, getters: true },
  timestamps: true
});

employeeSchema.virtual('payrolls', {
  ref: 'Payroll',
  localField: '_id',
  foreignField: 'employee',
  justOne: false
});

employeeSchema.virtual('isHighEarner').get(function () {
  return this.salary > 150000;
});

employeeSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  if (obj.salary < 100000) delete obj.salary;
  return obj;
};

module.exports = mongoose.model('Employee', employeeSchema);
