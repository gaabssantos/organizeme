import { Router } from 'express';

import { UserController } from '../controllers/user.controller';
import { UserFactory } from '../factories/user.factory';

const user = Router();

const controller = new UserController(UserFactory.getServiceInstance());

user.post('/create', controller.create);
user.post('/verification/:code', controller.accountVerification);

export default user;
