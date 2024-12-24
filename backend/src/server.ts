import cors from 'cors';
import express from 'express';

import 'dotenv/config';
import setupDatabase from './database';
import { errorHandler } from './middlewares/error-handler.middleware';
import routes from './routes';

const app = express();

setupDatabase().then(() => {
  app.use(express.json());
  app.use(cors({ origin: process.env.FRONT_URL }));
  app.use(routes);
  app.use(errorHandler);

  app.listen(process.env.PORT || 5000, () => {
    console.log('🎆 OrganizeMe server has started.');
  });
});
