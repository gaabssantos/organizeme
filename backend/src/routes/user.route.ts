import { Router } from 'express';

import { UserController } from '../controllers/user.controller';
import { userSchema } from '../dtos/user.dto';
import { UserFactory } from '../factories/user.factory';
import { ParamsType, validator } from '../middlewares/validator.middleware';

const user = Router();

const controller = new UserController(UserFactory.getServiceInstance());

user.post(
  '/create',
  validator({
    schema: userSchema,
    type: ParamsType.BODY,
  }),
  controller.create,
);
user.post('/verification/:code', controller.accountVerification);

export default user;
