import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { z, ZodRawShape } from 'zod';

import { AppError } from '../errors/app.error';

export enum ParamsType {
  QUERY = 'query',
  BODY = 'body',
}

type ValidateParams = {
  schema: ZodRawShape;
  type: ParamsType;
};

export const validator = (params: ValidateParams) => {
  return (req: Request, _: Response, next: NextFunction) => {
    const result = z.object(params.schema).safeParse(req[params.type]);

    if (!result.success) {
      const errorFormatted = result.error.issues.map(
        (item) => `${item.path.join('.')}: ${item.message}`,
      );

      throw new AppError(StatusCodes.UNPROCESSABLE_ENTITY, errorFormatted);
    }

    req[params.type] = result.data;

    next();
  };
};
