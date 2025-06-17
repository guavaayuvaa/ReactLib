const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  location: {
    type: String,
    required: true
  },
  budget: {
    type: Number,
    min: 0
  },
  head: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee'
  }
}, { timestamps: true });



departmentSchema.index({ location: 1 });

module.exports = mongoose.model('Department', departmentSchema);