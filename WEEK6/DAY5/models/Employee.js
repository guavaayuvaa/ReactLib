const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  position: {
    type: String,
    required: true,
    enum: ['Developer', 'Manager', 'HR', 'Designer', 'Analyst']
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
    required: true
  },
  salary: {
    type: Number,
    required: true,
    min: 0
  },
  hireDate: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, { 
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});


employeeSchema.index({ name: 'text' });
employeeSchema.index({ department: 1 });
employeeSchema.index({ position: 1 });
employeeSchema.index({ salary: 1 });


employeeSchema.virtual('payroll', {
  ref: 'Payroll',
  localField: '_id',
  foreignField: 'employeeId',
  justOne: true
});

module.exports = mongoose.model('Employee', employeeSchema);