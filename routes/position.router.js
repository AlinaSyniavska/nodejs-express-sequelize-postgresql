const {positionController} = require("../controllers");

const positionRouter = require('express').Router();

positionRouter.get('', positionController.getAllPositions);
positionRouter.post('', positionController.createPosition);
positionRouter.get('/:id', positionController.getPositionById);
positionRouter.put('/:id', positionController.updatePosition);
positionRouter.delete('/:id', positionController.deletePosition);

module.exports = positionRouter;
