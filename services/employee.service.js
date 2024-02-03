const { Employee, Position } = require('../dataBase/models');
const { Op } = require('sequelize');

module.exports = {
    findAll: () => {
        return Employee.findAll({
/*            where: {
/!*                age: {
                    [Op.gte]: 30,
                },*!/
                // PositionId: 2,
            },*/
            order: [['age', 'ASC']],
            include: [
                {
                    model: Position,
                },
            ],
        });
    },

    findOne: (id) => {
        return Employee.findByPk(id);
    },

    createOne: (product) => {
        return Employee.create(product);
    },
};
