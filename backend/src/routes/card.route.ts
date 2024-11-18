import { Router } from 'express';

import { CardController } from '../controllers/card.controller';
import { CardFactory } from '../factories/card.factory';

const card = Router();

const controller = new CardController(CardFactory.getServiceInstance());

card.post('/create', controller.create);

export default card;
