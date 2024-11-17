import { Router } from 'express';

import { BoardController } from '../controllers/board.controller';
import { boardSchema } from '../dtos/board.dto';
import { BoardFactory } from '../factories/board.factory';
import authMiddleware from '../middlewares/auth.middleware';
import { ParamsType, validator } from '../middlewares/validator.middleware';

const board = Router();

const controller = new BoardController(BoardFactory.getServiceInstance());

board.use(authMiddleware);

board.post(
  '/create',
  validator({ schema: boardSchema, type: ParamsType.BODY }),
  controller.create,
);
board.get('/', controller.index);

export default board;
