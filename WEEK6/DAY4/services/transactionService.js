const mongoose = require('mongoose');
const Employee = require('../models/Employee');
const Payroll = require('../models/Payroll');

async function createEmployeeWithPayroll(data) {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const [employee] = await Employee.create([data.employee], { session });

    const payrollData = {
      ...data.payroll,
      employee: employee._id
    };

    const netPay = payrollData.baseSalary + payrollData.bonus - payrollData.deductions;
    if (netPay < payrollData.baseSalary) {
      throw new Error('Net pay below base salary');
    }

    // Simulate failure
    if (employee.email === 'fail@case.com') {
      throw new Error('Manual simulated error');
    }

    await Payroll.create([payrollData], { session });

    await session.commitTransaction();
    session.endSession();

    return employee;
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    throw err;
  }
}

module.exports = { createEmployeeWithPayroll };
