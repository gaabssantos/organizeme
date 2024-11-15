import { Router } from 'express';

import mainRoute from './main.route';
import userRoute from './user.route';

const routes = Router();

routes.use('/', mainRoute);
routes.use('/user', userRoute);

export default routes;
