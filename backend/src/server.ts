import cors from 'cors';
import express from 'express';

import 'dotenv/config';
import setupDatabase from './database';
import routes from './routes';

const app = express();

setupDatabase().then(() => {
  app.use(express.json());
  app.use(routes);
  app.use(cors({ origin: process.env.FRONT_URL }));

  app.listen(process.env.PORT, () => {
    console.log('🎆 OrganizeMe server has started.');
  });
});
