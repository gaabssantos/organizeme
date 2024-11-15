import { Request, Response, Router } from 'express';

import packageJson from '../../package.json';

const mainRoute = Router();

mainRoute.get('/', (_: Request, res: Response) => {
  const { name, description, author } = packageJson;

  res.status(200).json({ name, description, author });
});

export default mainRoute;
