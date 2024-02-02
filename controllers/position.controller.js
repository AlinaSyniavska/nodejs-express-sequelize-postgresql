const { positionService } = require('../services');
const { CustomError } = require('../errors');

module.exports = {
    getAllPositions: async (req, res, next) => {
        try {
            const response = await positionService.findAll();

            res.json({
                data: response,
            });
        } catch (e) {
            next(e);
        }
    },

    createPosition: async (req, res, next) => {
        try {
            const newPosition = await positionService.createOne({
                ...req.body,
            });
            res.status(201).json(newPosition);
        } catch (e) {
            next(e);
        }
    },

    getPositionById: async (req, res, next) => {
        try {
            const { id } = req.params;
            const item = await positionService.findOne(id);

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

    updatePosition: async (req, res, next) => {
        try {
            const { id } = req.params;
            const updatedPosition = await positionService.updateOne(
                id,
                req.body,
            );
            res.status(201).json(updatedPosition);
        } catch (e) {
            next(e);
        }
    },

    deletePosition: async (req, res, next) => {
        try {
            const { id } = req.params;
            await positionService.deleteOne(id);
            res.sendStatus(204);
        } catch (e) {
            next(e);
        }
    },
};
