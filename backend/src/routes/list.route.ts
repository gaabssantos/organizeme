import { Router } from 'express';

import { ListController } from '../controllers/list.controller';
import { ListFactory } from '../factories/list.factory';

export const list = Router();

const controller = new ListController(ListFactory.getServiceInstance());

list.post('/create', controller.create);

export default list;
