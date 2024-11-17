import { Router } from 'express';

import { BoardController } from '../controllers/board.controller';
import { BoardFactory } from '../factories/board.factory';
import authMiddleware from '../middlewares/auth.middleware';

const board = Router();

const controller = new BoardController(BoardFactory.getServiceInstance());

board.use(authMiddleware);

board.post('/create', controller.create);
board.get('/', controller.index);

export default board;
