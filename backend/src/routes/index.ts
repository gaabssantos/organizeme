import { Router } from 'express';

import mainRoute from './main.route';

export const routes = Router();

routes.use('/', mainRoute);
