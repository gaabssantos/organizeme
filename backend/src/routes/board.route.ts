import { Router } from 'express';

import { BoardController } from '../controllers/board.controller';
import { boardSchema } from '../dtos/board.dto';
import { BoardFactory } from '../factories/board.factory';
import { ParamsType, validator } from '../middlewares/validator.middleware';

const board = Router();

const controller = new BoardController(BoardFactory.getServiceInstance());

board.post(
  '/create',
  validator({ schema: boardSchema, type: ParamsType.BODY }),
  controller.create,
);
board.delete('/delete/:id', controller.delete);

board.get('/', controller.index);
board.get('/:id', controller.indexById);

export default board;
