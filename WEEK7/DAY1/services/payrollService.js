const mongoose = require('mongoose');
const Payroll = require('../models/Payroll');

exports.handlePayrollTransaction = async (employeeId, baseSalary, bonus = 0, deductions = 0) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const payroll = await Payroll.create([{
            employeeId,
            baseSalary,
            bonus,
            deductions
        }], { session });

        await session.commitTransaction();
        session.endSession();
        return payroll[0];
    } catch (err) {
        await session.abortTransaction();
        session.endSession();
        throw err;
    }
};