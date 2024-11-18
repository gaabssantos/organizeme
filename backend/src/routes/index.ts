import { Router } from 'express';

import authMiddleware from '../middlewares/auth.middleware';
import boardRoute from './board.route';
import cardRoute from './card.route';
import listRoute from './list.route';
import mainRoute from './main.route';
import userRoute from './user.route';

const routes = Router();

routes.use('/', mainRoute);
routes.use('/user', userRoute);
routes.use(authMiddleware);
routes.use('/board', boardRoute);
routes.use('/list', listRoute);
routes.use('/card', cardRoute);

export default routes;
