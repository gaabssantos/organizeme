import { Router } from 'express';

import { ListController } from '../controllers/list.controller';
import { listSchema } from '../dtos/list.dto';
import { ListFactory } from '../factories/list.factory';
import { ParamsType, validator } from '../middlewares/validator.middleware';

export const list = Router();

const controller = new ListController(ListFactory.getServiceInstance());

list.post(
  '/create',
  validator({ schema: listSchema, type: ParamsType.BODY }),
  controller.create,
);

list.get('/:boardId', controller.indexByBoardId);

export default list;
