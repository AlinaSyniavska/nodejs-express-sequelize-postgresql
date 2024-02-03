const { CustomError } = require('../errors');
const {employeeService} = require("../services");

module.exports = {
    getAllEmployees: async (req, res, next) => {
        try {
            const response = await employeeService.findAll();

            res.json({
                data: response,
            });
        } catch (e) {
            next(e);
        }
    },

    createEmployee: async (req, res, next) => {
        try {
            const newEmployee = await employeeService.createOne({
                ...req.body,
            });
            res.status(201).json(newEmployee);
        } catch (e) {
            next(e);
        }
    },

    getEmployeeById: async (req, res, next) => {
        try {
            const { id } = req.params;
            const item = await employeeService.findOne(id);

            if (!item) {
                return next(
                    new CustomError(`Item with id ${id} not found`, 404),
                );
            }

            res.json(item);
        } catch (e) {
            next(e);
        }
    },

};
