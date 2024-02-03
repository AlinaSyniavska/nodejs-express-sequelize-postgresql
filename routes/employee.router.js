const { employeeController } = require('../controllers');

const employeeRouter = require('express').Router();

employeeRouter.get('', employeeController.getAllEmployees);
employeeRouter.post('', employeeController.createEmployee);
employeeRouter.get('/:id', employeeController.getEmployeeById);

module.exports = employeeRouter;
