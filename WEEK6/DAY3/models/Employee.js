const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const phoneRegex = /^[0-9]{10}$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: emailRegex,
  },
  phone: {
    type: String,
    match: [phoneRegex, 'Phone number must be 10 digits'],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  role: {
    type: String,
    enum: ['employee', 'manager'],
    default: 'employee',
  },
  departmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
  },
}, { timestamps: true });


EmployeeSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});


EmployeeSchema.pre('save', function (next) {
  if (this.role === 'manager' && !this.departmentId) {
    return next(new Error('Manager must be assigned to a department'));
  }
  next();
});

module.exports = mongoose.model('Employee', EmployeeSchema);
