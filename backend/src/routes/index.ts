import { Router } from 'express';

import boardRoute from './board.route';
import mainRoute from './main.route';
import userRoute from './user.route';

const routes = Router();

routes.use('/', mainRoute);
routes.use('/user', userRoute);
routes.use('/board', boardRoute);

export default routes;
