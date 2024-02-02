const { Position } = require('../dataBase/models');

module.exports = {
    findAll: (params = {}) => {
        return Position.findAll(params);
    },

    findOne: (id) => {
        return Position.findByPk(id);
    },

    createOne: (product) => {
        return Position.create(product);
    },

    updateOne: async (id, positionData) => {
        const [count, updatedPosition] = await Position.update(positionData, {
            returning: true,
            where: { id: id },
        });

        console.log(count);

        return updatedPosition;
    },

    deleteOne: (id) => {
        return Position.destroy({
            where: { id },
        });
    },
};
