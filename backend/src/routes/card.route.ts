import { Router } from 'express';

import { CardController } from '../controllers/card.controller';
import { cardSchema } from '../dtos/card.dto';
import { CardFactory } from '../factories/card.factory';
import { ParamsType, validator } from '../middlewares/validator.middleware';

const card = Router();

const controller = new CardController(CardFactory.getServiceInstance());

card.post(
  '/create',
  validator({ schema: cardSchema, type: ParamsType.BODY }),
  controller.create,
);

export default card;
